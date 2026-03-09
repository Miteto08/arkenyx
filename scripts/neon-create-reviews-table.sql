CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stars SMALLINT NOT NULL CHECK (stars >= 1 AND stars <= 5),
  services JSONB NOT NULL,
  comment TEXT NOT NULL,
  author TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews (created_at DESC);
