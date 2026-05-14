// ─────────────────────────────────────────────────────────────
//  PAST PRESIDENTS
//  A historical list of chapter presidents displayed on the site.
//
//  Each entry has:
//    name  — Full name
//    term  — Academic year or date range (e.g., "2024 – 2025")
//    image    — Optional direct image URL/path override
//    assetKey — Optional file key override for image lookup in src/images/
//
//  The list is shown in the order below (most recent first).
// ─────────────────────────────────────────────────────────────

export interface President {
  name: string;
  term: string;
  assetKey?: string;
  image?: string;
}

export const pastPresidents: President[] = [
  {
    name: 'Eric Gudiel',
    term: '2025 – Present',
  },
  // ── Add future presidents above this line ──
];
