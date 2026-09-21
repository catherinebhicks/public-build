import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

// Drafts are visible while writing locally, hidden in the built site.
// One definition, used by every page, the RSS feed and the sitemap —
// so a draft can never leak through a page that forgot to filter.
const isVisible = (post: Post) => import.meta.env.DEV || !post.data.draft;

const newestFirst = (a: Post, b: Post) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', isVisible);
  return posts.sort(newestFirst);
}

export async function getPostsByProject(slug: string): Promise<Post[]> {
  const posts = await getPosts();
  // Oldest first: a project reads as a build log, start to now.
  return posts.filter((p) => p.data.project === slug).reverse();
}

export async function getProjects(): Promise<Project[]> {
  return getCollection('projects');
}

// Status drives grouping on /projects and ordering within it.
export const STATUS_ORDER = ['active', 'shipped', 'parked'] as const;

export const STATUS_LABEL: Record<Project['data']['status'], string> = {
  active: 'In progress',
  shipped: 'Shipped',
  parked: 'Parked',
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Compact form for the meta row, whose columns are far narrower than the
// 1312px canvas the Figma hero assumes.
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// For <time datetime="...">, which needs a machine-readable value.
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
