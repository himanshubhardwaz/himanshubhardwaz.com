import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
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
        default: process.env.TURSO_DATABASE_URL,
      }),
      TURSO_AUTH_TOKEN: envField.string({
        required: true,
        context: "server",
        access: "secret",
        default: process.env.TURSO_AUTH_TOKEN,
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
        default: process.env.GOOGLE_OAUTH_CLIENT_ID,
      }),
      GOOGLE_OAUTH_CLIENT_SECRET: envField.string({
        required: true,
        context: "server",
        access: "secret",
        default: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      }),
    },
  },
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
  output: "static",
  vite: {
    define: {
      "process.env": process.env,
    },
  },
});
