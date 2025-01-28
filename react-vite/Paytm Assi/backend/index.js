import express from "express";
import mianRouter from "./routes/index.js"

const app = express();

const PORT = 3000

app.get('/', (req, res) => {
    res.send("hii Om")
})

app.use("/api/v1", mianRouter )

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); 
})