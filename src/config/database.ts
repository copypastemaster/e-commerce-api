import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

const getConnection = async () => {
  try {
    await client.connect();
    console.log('App connected to database');
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}

getConnection();

export default client;
