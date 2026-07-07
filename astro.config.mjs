import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { rehypeImageCaptions } from './src/utils/rehype-image-captions.mjs';

export default defineConfig({
  site: 'https://teslim.xyz',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    processor: unified({ rehypePlugins: [rehypeImageCaptions] }),
  },
});
