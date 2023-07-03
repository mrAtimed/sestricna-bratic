import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import image from "@astrojs/image";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://inspira-content.hr/',
  integrations: [mdx(), sitemap(), compress(), image(), preact()]
});