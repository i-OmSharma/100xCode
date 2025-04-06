import { client } from "../db";
import { Request, Response } from "express";

export async function createUser() {
  try {
    const insertQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )`;

    await client.query(insertQuery);
    console.log("Table ready");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}
