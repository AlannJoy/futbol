const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Team = require("./team/model");
const { teamRouter } = require("./team/router");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

app.use("/team", teamRouter);
app.get("/", (req, res) => {
  db;
  res.json(db);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
