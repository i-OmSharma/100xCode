const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const router = require("./routes/admin");


// Middleware parsing body
app.use(bodyParser.json());

// Use routes
app.use("/admin", router);
// app.use("/user", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is Running");
});

module.exports = app; // Export the app, not router
