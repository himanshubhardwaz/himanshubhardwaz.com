import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error("No site in context");
  }

  const blogs = await getCollection("posts");

  return rss({
    title: "Himanshu's Personal Website",
    description:
      "A Full Stack Developer with a passion for building and creating. My work reflects a deep-rooted fascination with how things work.",
    site: context.site,
    items: blogs.map((post) => ({
      ...post.data,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
