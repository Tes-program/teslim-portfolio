import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    hash: z.string(),
    context: z.string(),
    dateRange: z.string().optional(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    featured: z.boolean().optional(),
    // Fixed display order for the project list — these entries don't have
    // a single sortable date (some are "ongoing"), so order is explicit.
    order: z.number(),
  }),
});

const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    week: z.string(),
    date: z.coerce.date(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    summary: z.string(),
    status: z.enum(['published', 'coming-soon']),
    order: z.number(),
  }),
});

const workshop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshop' }),
  schema: z.object({
    title: z.string(),
    number: z.number().optional(),
    context: z.string().optional(),
    status: z.enum(['coming-soon', 'published']),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    summary: z.string(),
  }),
});

export const collections = { projects, log, writing, workshop };
