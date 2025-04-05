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

async function insertIntoTable() {
    await client.connect();
    const insertQuery = `
            INSERT INTO users (
                username,
                email,
                password,
                created_at
            )
            VALUES($1, $2, $3, CURRENT_TIMESTAMP)
            RETURNING *;
        `;
    const Values = ['example', 'example@example.com','asdasd']

    const res = await client.query(insertQuery, Values)
    console.log('Insertion complete:', res.rows[0]);
}

async function main() {
    try{
        // await createUserTable()
        await insertIntoTable()
    }catch(err){
        console.log("ERROR", err);
    }finally{
        await client.end(); //always close connection with DB
        console.log("Connection Closed");
    }
}

main()