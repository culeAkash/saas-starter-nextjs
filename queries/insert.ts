import { db } from "@/db";
import { users } from "@/db/schema";
export const createUser = async (data: typeof users.$inferInsert) => {
  await db.insert(users).values(data);
};
