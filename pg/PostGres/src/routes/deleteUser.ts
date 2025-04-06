import { client } from "../db"
import { Request, Response } from "express";

export async function deleteUser(req: Request, res: Response) {
    const username = req.params.username;

    try {

        const deleteQuery = `
            DELETE FROM users WHERE username ILIKE $1
            RETURNING *;
        `
        const values = [username];
    
        const result = await client.query(deleteQuery, values);
        if (result.rows.length > 0) {
            console.log('Deletion Complete', result.rows[0]);
            res.json({message: "User Deleted", user: result.rows[0]});
        } else {
            console.log('No user found');
            res.status(404).json({error:"User not find"})
        }
    } catch (err) {
        console.log("Error deleting user", err);
        res.status(500).json({error:"Not connected"})
    }

}