import { atom } from "nanostores";
import type { Session, User } from "~/lib/server/db";

export const user = atom<User | null>(null);
export const session = atom<Session | null>(null);
export const isLoggedIn = atom(false);
