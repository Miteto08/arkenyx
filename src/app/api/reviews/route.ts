import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const dynamic = 'force-dynamic';

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is not set');
  }
  return neon(url);
}

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, stars, services, comment, author, created_at
      FROM reviews
      ORDER BY created_at DESC
    `;
    const testimonials = rows.map((r) => ({
      id: r.id,
      stars: Number(r.stars),
      services: r.services as string[],
      text: r.comment,
      author: r.author ?? undefined,
      created_at: r.created_at,
    }));
    return NextResponse.json(testimonials);
  } catch (err) {
    console.error('GET /api/reviews', err);
    return NextResponse.json(
      { error: 'Failed to load reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { stars, services, text, author } = body as {
      stars?: number;
      services?: string[];
      text?: string;
      author?: string;
    };

    if (
      typeof stars !== 'number' ||
      stars < 1 ||
      stars > 5 ||
      !Array.isArray(services) ||
      typeof text !== 'string' ||
      text.trim().length < 20
    ) {
      return NextResponse.json(
        { error: 'Invalid review: stars 1–5, services array, text min 20 chars' },
        { status: 400 }
      );
    }

    const authorVal =
      typeof author === 'string' && author.trim().length > 0 ? author.trim() : null;

    const sql = getDb();
    await sql`
      INSERT INTO reviews (stars, services, comment, author)
      VALUES (${stars}, ${JSON.stringify(services)}, ${text.trim()}, ${authorVal})
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
