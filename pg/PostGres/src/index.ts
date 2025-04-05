// function to create a user table in DB.

import { Client } from "pg";

const client = new Client({
  user: "om",
  host: "localhost",
  database: "mydb",
  password: "pass",
  port: 5432,
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
  console.log(result);
}
  
createUserTable();
