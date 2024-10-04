import { Client } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'e-commerce-API',
  password: process.env.DB_PASSWORD || '',
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
