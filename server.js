const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

// Dynamic API
app.get("/api", (req, res) => {
    res.json({
        message: "Hello! Data received from Node.js server."
    });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});