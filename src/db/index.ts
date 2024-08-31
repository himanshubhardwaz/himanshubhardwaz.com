import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { likesTable, viewsTable } from "./schema";

const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL!,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso, {
  schema: {
    likesTable,
    viewsTable,
  },
});
