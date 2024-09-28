const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

//Middleware for parsing requests bodies

app.use(bodyParser.json());
app.use("/admin", adminRoutes);
app.use("/user", userRoutes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is Running");
}); 