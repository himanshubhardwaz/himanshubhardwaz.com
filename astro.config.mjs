import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  site: process.env.BASE_URL,
  vite: {
    build: {
      minify: false,
    },
  },
  env: {
    schema: {
      TURSO_DATABASE_URL: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
      TURSO_AUTH_TOKEN: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
      BASE_URL: envField.string({
        required: true,
        context: "client",
        access: "public",
        default: "https://himanshubhardwaz.com",
      }),
      GOOGLE_OAUTH_CLIENT_ID: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
      GOOGLE_OAUTH_CLIENT_SECRET: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
    },
  },
  adapter: cloudflare({
    imageService: "passthrough",
  }),
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
