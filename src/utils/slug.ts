export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getWritingSlug(entry: { data: { title: string; slug?: string } }): string {
  return entry.data.slug ?? slugify(entry.data.title);
}
