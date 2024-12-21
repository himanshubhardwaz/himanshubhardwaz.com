import type { APIRoute, GetStaticPaths } from "astro";
import { eq, sql } from "drizzle-orm";
import { db, likesTable, viewsTable } from "~/lib/server/db";
import { z } from "astro:schema";
import { getCollection } from "astro:content";

export const postBodySchema = z.object({
  liked: z.boolean().optional(),
  viewed: z.boolean().optional(),
});

export const getStaticPaths = (async () => {
  return (await getCollection("posts")).map((article) => ({
    params: { slug: article.slug },
    props: { article },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response(null, { status: 404 });

  try {
    const [likesResult, viewsResult] = await Promise.allSettled([
      db.query.likesTable.findFirst({
        where: (ct) => eq(ct.slug, slug),
      }),
      db.query.viewsTable.findFirst({
        where: (ct) => eq(ct.slug, slug),
      }),
    ]);
    const likes =
      likesResult.status === "fulfilled" ? likesResult.value?.likes : null;
    const views =
      viewsResult.status === "fulfilled" ? viewsResult.value?.views : null;
    if (likes === null && views === null) {
      return new Response(null, { status: 404 });
    }
    return new Response(
      JSON.stringify({
        likes,
        views,
      })
    );
  } catch (error) {
    return new Response("Something went wrong: " + error, { status: 500 });
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  const slug = params.slug;
  if (!slug) return new Response(null, { status: 404 });

  try {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      const parsedBody = postBodySchema.safeParse(body);
      if (parsedBody.success) {
        const { liked, viewed } = parsedBody.data;
        await db
          .update(likesTable)
          .set({
            likes: sql`${likesTable.likes} + ${
              typeof liked === "undefined" ? 0 : liked ? 1 : -1
            }`,
          })
          .where(eq(likesTable.slug, slug));
        await db
          .update(viewsTable)
          .set({
            views: sql`${viewsTable.views} + ${viewed ? 1 : 0}`,
          })
          .where(eq(viewsTable.slug, slug));
        return new Response(JSON.stringify({ liked, viewed }), { status: 200 });
      } else {
        return new Response("Invalid body.", { status: 400 });
      }
    }
    return new Response("Invalid content type.", { status: 400 });
  } catch (error) {
    return new Response("Something went wrong: " + error, { status: 500 });
  }
};
