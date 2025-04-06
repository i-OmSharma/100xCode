import { client } from "../db";
import { Request, Response } from "express";

export async function insertUser(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {

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
        const Values = [username, email, password];
      
        const result = await client.query(insertQuery, Values);
        console.log("Insertion complete:", result.rows[0]);

        res.status(202).json({message: "Data Inserted", user: result.rows[0]});

    } catch (err) {
        console.log("Error inserting", err);
        res.status(500).json({error:"Internal server error"})
    }

  }

