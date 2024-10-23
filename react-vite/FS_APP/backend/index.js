import express from "express";
import cors from 'cors';
import { createTodo, updateTodo } from "./types.js";  
import { todo } from "./db.js";
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You send wrong inputs"
        })
        return; 
    }
    //put in MDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completition: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({})
    console.log(todos);
    res.json({
        todos 
    })
    
})  

app.put("/ completion", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //put in MDB
    await todo.update({
        _id: req.body.id
    }, {
        completition: true
    })
    res.json({
        msg: "Todo completed"
    })
})

app.listen(port, () => {
    console.log(`server is runnint at http://localhost:${port}`);
})
