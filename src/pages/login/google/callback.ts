import {
  generateSessionToken,
  createSession,
  setSessionTokenCookie,
} from "~/lib/server/session";
import { google } from "~/lib/client/oauth";
import { decodeIdToken } from "arctic";

import type { APIContext } from "astro";
import type { OAuth2Tokens } from "arctic";
import {
  createUser,
  getUserFromGoogleId,
} from "~/lib/server/user-session-crud";

export const prerender = false;

export async function GET(context: APIContext): Promise<Response> {
  const code = context.url.searchParams.get("code");
  const state = context.url.searchParams.get("state");
  const storedState = context.cookies.get("google_oauth_state")?.value ?? null;
  const codeVerifier =
    context.cookies.get("google_code_verifier")?.value ?? null;
  if (
    code === null ||
    state === null ||
    storedState === null ||
    codeVerifier === null
  ) {
    return new Response(null, {
      status: 400,
    });
  }
  if (state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch (e) {
    return new Response(null, {
      status: 400,
    });
  }
  const claims = decodeIdToken(tokens.idToken()) as {
    sub: string;
    name: string;
  };
  const googleId = claims.sub;
  const userName = claims.name;

  const existingUser = await getUserFromGoogleId(googleId);

  if (existingUser !== null) {
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    setSessionTokenCookie(context, sessionToken, session.expiresAt);
    return context.redirect("/");
  }

  const user = await createUser({ googleId, userName });

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, user.id);
  setSessionTokenCookie(context, sessionToken, session.expiresAt);
  return context.redirect("/");
}
