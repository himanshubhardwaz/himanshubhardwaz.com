import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { eq, like, sql } from "drizzle-orm";
import { db } from "~/db";
import { viewsTable, likesTable } from "~/db/schema";

export const server = {
  updateViewCount: defineAction({
    input: z.object({
      slug: z.string(),
    }),
    handler: async ({ slug }) => {
      try {
        await db
          .update(viewsTable)
          .set({
            views: sql`${viewsTable.views} + 1`,
          })
          .where(eq(viewsTable.slug, slug));
        return "OK";
      } catch (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Failed updating view count.",
        });
      }
    },
  }),
  updateLikesCount: defineAction({
    input: z.object({
      slug: z.string(),
      liked: z.boolean().default(true),
    }),
    handler: async ({ slug, liked }) => {
      try {
        await db
          .update(likesTable)
          .set({
            likes: sql`${likesTable.likes} + ${liked ? 1 : -1}`,
          })
          .where(eq(likesTable.slug, slug));
        return { liked };
      } catch (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Failed updating likes count.",
        });
      }
    },
  }),
};
