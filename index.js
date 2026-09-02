const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.get("/home", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("\n==============================================");
  console.log("           APPLICATION SERVER");
  console.log("==============================================");
  console.log(`[INFO] Environment : ${process.env.NODE_ENV || "development"}`);
  console.log(`[INFO] Server      : Node.js`);
  console.log(`[INFO] Port        : ${PORT}`);
  console.log(`[INFO] Status      : RUNNING`);
  console.log(`[INFO] Health      : OK`);
  console.log(`[INFO] Started At  : ${new Date().toLocaleString()}`);
  console.log("==============================================");
  console.log("[INFO] Server ready to accept requests.\n");
});