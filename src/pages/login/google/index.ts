import { generateState, generateCodeVerifier } from "arctic";
import { google } from "~/lib/server/oauth";

import type { APIContext } from "astro";

export const prerender = false;

export async function GET(context: APIContext): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = google.createAuthorizationURL(state, codeVerifier, [
    "openid",
    "profile",
  ]);

  context.cookies.set("google_oauth_state", state, {
    path: "/",
    secure: import.meta.env.PROD,
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });
  context.cookies.set("google_code_verifier", codeVerifier, {
    path: "/",
    secure: import.meta.env.PROD,
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });

  return context.redirect(url.toString());
}
