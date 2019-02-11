const express = require("express");
const db = require("./data/db");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.post("/api/users", (req, res) => {

});

server.get("/api/users", (req, res) => {

});

server.get("/api/users/:id", (req, res) => {

});

server.delete("/api/users/:id", (req, res) => {

});

server.put("/api/users/:id", (req, res) => {

});

server.listen(5000, () => console.log("Running user server on 5000..."));
