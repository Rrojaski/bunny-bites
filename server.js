const express = require("express");
const connectDB = require('./config/db');
const server = new express();


// Connect Database
connectDB();

server.get("/", (req, res) => {
  res.send(`API Running`);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server started on port ${PORT}`));
