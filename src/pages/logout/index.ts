import {
  invalidateSession,
  deleteSessionTokenCookie,
} from "~/lib/server/session";

import type { APIContext } from "astro";

export const prerender = false;

export async function POST(context: APIContext): Promise<Response> {
  if (context.locals.session === null) {
    return new Response(null, {
      status: 401,
    });
  }
  await invalidateSession(context.locals.session.id);
  deleteSessionTokenCookie(context);
  return context.redirect("/");
}
