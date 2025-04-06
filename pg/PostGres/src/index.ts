import express from "express";
import { connectToDB } from "./db";
import { createUser } from "./routes/createUser";
import { insertUser } from "./routes/insertUser";
import { getUser } from "./routes/getUser";
import { deleteUser } from "./routes/deleteUser";

import dotenv from "dotenv"

dotenv.config();


const app = express()
const port = process.env.PORT ||  3000;

app.use(express.json());

app.post("/users", insertUser);
app.get("/users/:email", getUser);
app.delete("/users/:username", deleteUser);

app.listen(port, async () => {
    await connectToDB();
    await createUser()
    console.log(`Server is running at http://localhost:${port}`);
    
})
