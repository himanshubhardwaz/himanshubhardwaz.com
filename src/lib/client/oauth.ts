import { Google } from "arctic";

export const google = new Google(
  import.meta.env.GOOGLE_OAUTH_CLIENT_ID,
  import.meta.env.GOOGLE_OAUTH_CLIENT_SECRET,
  "http://localhost:4321/login/google/callback"
);