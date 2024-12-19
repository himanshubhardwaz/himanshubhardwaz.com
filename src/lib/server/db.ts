import type { InferSelectModel } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { likesTable, sessionTable, userTable, viewsTable } from "./schema";

export type User = InferSelectModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;
export type Likes = InferSelectModel<typeof likesTable>;
export type Views = InferSelectModel<typeof viewsTable>;

const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL!,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
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
