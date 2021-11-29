const express = require("express");
require("dotenv").config();
const db = require("./db/db.js");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
