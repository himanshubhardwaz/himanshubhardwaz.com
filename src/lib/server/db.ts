import type { InferSelectModel } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { likesTable, sessionTable, userTable, viewsTable } from "./schema";
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "astro:env/server";

export type User = InferSelectModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;
export type Likes = InferSelectModel<typeof likesTable>;
export type Views = InferSelectModel<typeof viewsTable>;

const turso = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso, {
  schema: {
    likesTable,
    viewsTable,
    userTable,
    sessionTable,
  },
});

export { likesTable, sessionTable, userTable, viewsTable };
