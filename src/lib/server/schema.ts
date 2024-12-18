import type { InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: integer("id").primaryKey(),
  googleId: text("googleId").notNull(),
  userName: text("name").notNull(),
});

export const sessionTable = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer("expires_at", {
    mode: "timestamp",
  }).notNull(),
});

export const likesTable = sqliteTable("likes", {
  slug: text("slug").notNull().primaryKey(),
  likes: integer("likes").notNull().default(0),
});

export const viewsTable = sqliteTable("views", {
  slug: text("slug").notNull().primaryKey(),
  views: integer("views").notNull().default(0),
});

export type User = InferSelectModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;
