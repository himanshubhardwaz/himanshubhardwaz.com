import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { shield } from "@kindspells/astro-shield";

export default defineConfig({
  site: "https://himanshubhardwaz.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    shield({
      directives: {
        "default-src": ["'self'"], // Default policy for loading content
        "script-src": [
          "'self'",
          "'unsafe-inline'",
          "https://static.cloudflareinsights.com", // Allow Cloudflare script
        ],
        "style-src": ["'self'", "'unsafe-inline'"], // Allows styles from self and inline styles
        "img-src": ["'self'", "data:", "https:"], // Allows images from self, data URIs, and HTTPS
        "font-src": ["'self'", "https:"], // Allows fonts from self and HTTPS
        "object-src": ["'none'"], // Disallows Flash, Silverlight, or other plugins
        "base-uri": ["'self'"], // Restricts the URLs that can be used in a document's <base> element
        "form-action": ["'self'"], // Restricts the URLs that can be used as the action of HTML forms
      },
    }),
  ],
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
