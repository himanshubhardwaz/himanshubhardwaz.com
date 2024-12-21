import { Google } from "arctic";
import {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
} from "astro:env/server";
import { BASE_URL } from "astro:env/client";

export const google = new Google(
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  `${BASE_URL}/login/google/callback`
);
