import { Client } from "pg";
import dotenv from "dotenv"

dotenv.config();

export const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export async function connectToDB() {
    await client.connect();
    console.log("Connected to DB Postgres");
}