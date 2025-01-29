import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import jwt from "jsonwebtoken"  
import mianRouter from "./routes/index.js"

const app = express();


const PORT = 3000
app.use(cors())
app.use(express .json())
app.get('/', (req, res) => {
    res.send("hii Om")
})

app.use("/api/v1", mianRouter )

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); 
})