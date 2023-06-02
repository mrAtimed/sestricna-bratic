import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://sestricnabratic.netlify.app',
  integrations: [mdx(), sitemap(), compress(), react()]
});