import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { fetchGooglePlaceReviews, mergeReviewsByDate, type PublicReview } from '@/lib/googlePlacesReviews';

export const dynamic = 'force-dynamic';

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return neon(url);
}

interface ReviewRow {
  id: string;
  stars: number;
  services: string[] | unknown;
  comment: string;
  author: string | null;
  created_at: string;
}

function rowToSiteReview(r: ReviewRow): PublicReview {
  return {
    id: String(r.id),
    source: 'site',
    stars: Number(r.stars),
    services: (Array.isArray(r.services) ? r.services : []) as string[],
    text: r.comment,
    author: r.author ?? undefined,
    created_at: r.created_at,
  };
}

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, stars, services, comment, author, created_at
      FROM reviews
      ORDER BY created_at DESC
    `;
    const siteReviews = (rows as ReviewRow[]).map(rowToSiteReview);
    const googleReviews = await fetchGooglePlaceReviews();
    const merged = mergeReviewsByDate(siteReviews, googleReviews);
    return NextResponse.json(merged);
  } catch (err) {
    console.error('GET /api/reviews', err);
    return NextResponse.json(
      { error: 'Failed to load reviews' },
      { status: 500 }
    );
  }
}

interface PostBody {
  stars?: number;
  services?: string[];
  text?: string;
  author?: string;
}

const INVALID_REVIEW_MSG = 'Invalid review: stars 1–5, services array, text min 20 chars';

function validateReview(body: PostBody): { ok: true; stars: number; services: string[]; text: string; author: string | null } | { ok: false; status: number; error: string } {
  const { stars, services, text, author } = body;
  if (typeof stars !== 'number' || stars < 1 || stars > 5 || !Array.isArray(services) || typeof text !== 'string' || text.trim().length < 20) {
    return { ok: false, status: 400, error: INVALID_REVIEW_MSG };
  }
  const authorVal = typeof author === 'string' && author.trim().length > 0 ? author.trim() : null;
  return { ok: true, stars, services, text: text.trim(), author: authorVal };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PostBody;
    const validated = validateReview(body);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: validated.status });
    }
    const { stars, services, text, author } = validated;
    const sql = getDb();
    await sql`
      INSERT INTO reviews (stars, services, comment, author)
      VALUES (${stars}, ${JSON.stringify(services)}, ${text}, ${author})
    `;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('POST /api/reviews', err);
    return NextResponse.json(
      { error: 'Failed to save review' },
      { status: 500 }
    );
  }
}
