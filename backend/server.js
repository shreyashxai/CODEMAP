// backend/server.js
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000; 

app.use(cors());


const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));


app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend is working! 🚀" });
});


app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "backend.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
