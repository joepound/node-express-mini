const express = require("express");
const db = require("./data/db");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.post("/api/users", (req, res) => {
  const newUser = req.body;

  db
    .insert(newUser)
    .then(newUser => res.status(201).json(newUser))
    .catch(err => res.status(err.code).json(err));
});

server.get("/api/users", (req, res) => {
  db
    .find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(err.code).json(err));
});

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db
    .findById(id)
    .then(user => res.status(user ? 200 : 404).json(user))
    .catch(err => res.send(err.code).json(err));
});

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db
    .remove(id)
    .then(deletions => res.status(204).end())
    .catch(err => res.json(err.code).json(err));
});

server.put("/api/users/:id", (req, res) => {

});

server.listen(5000, () => console.log("Running user server on 5000..."));
