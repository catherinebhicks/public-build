// Every internal link must go through this.
//
// The site is served from a base path (`/public-build` on GitHub Pages, and
// the same path again after the move to catherinehicks.com). Astro does NOT
// rewrite hardcoded hrefs, so a bare `/posts/x` silently 404s under a base.
// Joining here keeps the base in exactly one place.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}
