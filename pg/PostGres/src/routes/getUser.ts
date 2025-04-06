import { client } from "../db";
import { Response, Request } from "express";

export async function getUser(req: Request, res: Response) {
  const email = req.body.email;

  try {


    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]);
      res.json(result.rows[0])
    } else {
      console.log("No user found with the email");
      res.status(500).json({error: "User not found"})
    }
  } catch (err) {
    console.log("Error while fetching user", err);
    res.status(500).json({error: "Internl server error"})
  }
}
