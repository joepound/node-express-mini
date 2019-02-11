const express = require("express");
const db = require("./data/db");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.post("/api/users", (req, res) => {
  const newUser = req.body;

  if (!newUser) {
    const errorMessage = "Please provide a data object.";
    res.status(400).json({ errorMessage });
  } else if (!newUser.name) {
    const errorMessage = "Please provide a name for the user.";
    res.status(400).json({ errorMessage });
  } else if (!newUser.bio) {
    const errorMessage = "Please provide a bio for the user.";
    res.status(400).json({ errorMessage });
  } else {
    db.insert(newUser)
      .then(newUser => {
        const { id } = newUser;
        db.findById(id)
          .then(addedUser => res.status(201).json(addedUser))
          .catch(err => {
            const error =
              "A user was created but an error occurred in retrieving the new user's data.";
            res.status(500).json({ error });
          });
      })
      .catch(err => {
        const error =
          "There was an error while saving the user to the database.";
        res.status(500).json({ error });
      });
  }
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(err => {
      const error = "The users' information could not be retrieved.";
      res.status(500).json({ error });
    });
});

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        const message = `No user with the specified ID [${id}] exists.`;
        res.status(404).json({ message });
      }
    })
    .catch(err => {
      const error = "The user's information could not be retrieved.";
      res.status(500).json({ error });
    });
});

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(user => {
      if (user) {
        db.remove(id)
          .then(deletions => {
            if (deletions === 1) {
              res.status(200).json(user);
            } else if (deletions > 1) {
              const message =
                "ERROR: MORE THAN ONE USER WAS INADVERTENTLY DELETED!";
              res.status(500).json({ message });
            } else {
              const message =
                "The user could not be removed (error in deletion targeting).";
              res.status(500).json({ message });
            }
          })
          .catch(err => {
            const error = "The user could not be removed.";
            res.json(err.code).json({ error });
          });
      } else {
        const message = `No user with the specified ID [${id}] exists.`;
        res.status(404).json({ message });
      }
    })
    .catch(err => {
      const error =
        "The user could not be removed (error in checking user data).";
      res.status(500).json({ error });
    });
});

server.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db.update(id, changes)
    .then(updateCount => res.status(204).end())
    .catch(err => res.status(err.code).json(err));
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Running user server on 5000..."));
