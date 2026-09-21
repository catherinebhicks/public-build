import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts. One file per entry, named NN-<slug>.md.
// The schema is the guard rail: a malformed post fails the build
// instead of shipping broken.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string(),
      // Drafts carry no date. A date is added at publish time, which is
      // what the refine below enforces — so a post can't go live undated.
      date: z.coerce.date().optional(),
      summary: z.string(),
      // Slug of an entry in the `projects` collection. Optional, so a
      // one-off post that belongs to no project is still valid.
      project: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    })
    .refine((post) => post.draft || post.date !== undefined, {
      message:
        'A published post needs a date. Add `date: YYYY-MM-DD` to the frontmatter, or keep `draft: true` until it is ready.',
      path: ['date'],
    }),
});

// Projects. Metadata lives here, not repeated across post frontmatter,
// so a project is edited in exactly one place.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    blurb: z.string(),
    status: z.enum(['active', 'shipped', 'parked']),
    url: z.string().url().optional(),
    startDate: z.coerce.date(),
  }),
});

export const collections = { blog, projects };
