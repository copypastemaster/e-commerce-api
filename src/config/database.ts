import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

export const getConnection = async () => {
  try {
    console.log('App connected to database');
    await client.connect();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}

export const disconnect = async () => {
  try {
    await client.end();
    console.log('Disconnected from database.');
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error closing database connection: ${err.message}`)
    }
  }
}

getConnection();

