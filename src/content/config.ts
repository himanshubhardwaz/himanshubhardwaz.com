import { defineCollection, z, type ImageFunction } from "astro:content";

const projectSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.object({ src: image(), alt: z.string() }),
    links: z
      .array(z.object({ href: z.string(), text: z.string() }))
      .optional()
      .default([]),
  });

const experiences = defineCollection({
  type: "content",
  schema: ({ image }) => projectSchema(image),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({ title: z.string(), description: z.string() }),
});

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: z.object({ src: image(), alt: z.string() }),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => projectSchema(image),
});

const techs = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    href: z.string().url(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      image: image(),
      href: z.string().url(),
      draft: z.boolean().optional().default(false),
    }),
});

const texts = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = {
  experiences,
  legal,
  posts,
  projects,
  techs,
  testimonials,
  texts,
};
