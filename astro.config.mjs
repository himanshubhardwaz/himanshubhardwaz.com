import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rss from "@astrojs/rss";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  site: process.env.SITE_URL,
  adapter: cloudflare(),
  integrations: [tailwind(), mdx(), sitemap(), rss()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },
  output: "hybrid",
  experimental: {
    serverIslands: true,
  },
  vite: {
    define: {
      "process.env": process.env,
    },
  },
});
