import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://himanshubhardwaz.com",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },
  output: "static",
});
