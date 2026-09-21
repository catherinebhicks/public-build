import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { url } from '../lib/url';

export async function GET(context) {
  // Undated posts are unpublished drafts. They surface locally in dev but
  // must never reach the feed, where pubDate is required.
  const posts = (await getPosts()).filter((post) => post.data.date);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // context.site is the bare origin; the feed's channel link must
    // include the base path or it points at the wrong site root.
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: url(`/posts/${post.id}/`),
      categories: post.data.tags,
    })),
  });
}
