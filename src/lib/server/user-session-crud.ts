import { db, userTable } from "~/lib/server/db";
import { eq } from "drizzle-orm/expressions";

export const getUserFromGoogleId = async (googleId: string) => {
  const result = await db
    .select({ user: userTable })
    .from(userTable)
    .where(eq(userTable.googleId, googleId));
  if (result.length < 1) {
    return null;
  }
  return result[0].user;
};

export const createUser = async (user: typeof userTable.$inferInsert) => {
  const result = await db.insert(userTable).values(user).returning({
    id: userTable.id,
    userName: userTable.userName,
    googleId: userTable.googleId,
  });
  return result[0];
};
