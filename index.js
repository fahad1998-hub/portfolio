const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.get("/home", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});