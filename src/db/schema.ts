import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const likesTable = sqliteTable("likes", {
  slug: text("slug").notNull().primaryKey(),
  likes: integer("likes").notNull().default(0),
});

export const viewsTable = sqliteTable("views", {
  slug: text("slug").notNull().primaryKey(),
  views: integer("views").notNull().default(0),
});
