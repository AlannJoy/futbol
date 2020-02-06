const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Team = require("./team/model");
// const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "The Diary of a Young Girl", author: "Anne Frank" }
];
app.get("/", (req, res) => res.redirect("/books"));
app.get("/books", (req, res) => res.json({ data: books }));
app.get("/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const book = books.find(b => b.id == bookId);
  res.json(book);
});
app.get("/", (req, res) => {
  db;
  res.json(db);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
