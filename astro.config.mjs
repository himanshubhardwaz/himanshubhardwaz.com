import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  site: process.env.SITE_URL,
  adapter: cloudflare(),
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },
  output: "server",
  vite: {
    define: {
      "process.env": process.env,
    },
  },
});
