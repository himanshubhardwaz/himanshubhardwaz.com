import {
  generateSessionToken,
  createSession,
  setSessionTokenCookie,
} from "~/lib/server/session";
import { google } from "~/lib/server/oauth";
import { decodeIdToken } from "arctic";

import type { APIContext } from "astro";
import type { OAuth2Tokens } from "arctic";
import {
  createUser,
  getUserFromGoogleId,
} from "~/lib/server/user-session-crud";

export async function GET(context: APIContext): Promise<Response> {
  console.log("here 1");
  const code = context.url.searchParams.get("code");
  const state = context.url.searchParams.get("state");
  const storedState = context.cookies.get("google_oauth_state")?.value ?? null;
  const codeVerifier =
    context.cookies.get("google_code_verifier")?.value ?? null;
  console.log("here 2", code, state, storedState, codeVerifier);
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
  console.log("here 3");
  if (state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }
  console.log("here 4");
  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch (e) {
    console.log("here 4.5", e);
    return new Response(null, {
      status: 400,
    });
  }
  console.log("here 5");
  const claims = decodeIdToken(tokens.idToken()) as {
    sub: string;
    name: string;
  };
  const googleId = claims.sub;
  const userName = claims.name;

  console.log("here 6: ", { googleId, userName });

  const existingUser = await getUserFromGoogleId(googleId);

  console.log("here 7: ", existingUser);

  if (existingUser !== null) {
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    setSessionTokenCookie(context, sessionToken, session.expiresAt);
    return context.redirect("/");
  }

  console.log("here 8: ");

  const user = await createUser({ googleId, userName });

  console.log("here 9: ", user);

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, user.id);

  console.log("here 10: ", user);
  setSessionTokenCookie(context, sessionToken, session.expiresAt);
  console.log("here 11: ");
  return context.redirect("/");
}
