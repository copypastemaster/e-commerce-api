import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres'
import { client } from '../config/database';

export const users = pgTable('tblusers', {
  id: serial('id').primaryKey(),
  username: text('username'),
  password: text('password'),
});

const db = drizzle(client, { schema: { users } })

export const getUsers = async () => {
  try {
    const result = await db.query.users.findMany();
    return result;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error getting users: ${err.message}`)
    }
  }
}