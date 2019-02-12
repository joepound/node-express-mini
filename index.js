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
              const error =
                "ERROR: MORE THAN ONE USER WAS INADVERTENTLY DELETED!";
              res.status(500).json({ error });
            } else {
              const error =
                "The user could not be removed (error in deletion process).";
              res.status(500).json({ error });
            }
          })
          .catch(err => {
            const error =
              "The user could not be removed (error in resolving DELETE request).";
            res.status(500).json({ error });
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

  if (!changes) {
    const errorMessage = "Please provide an update object.";
    res.status(400).json({ errorMessage });
  } else if (!changes.name) {
    const errorMessage = "Please provide a name for the user.";
    res.status(400).json({ errorMessage });
  } else if (!changes.bio) {
    const errorMessage = "Please provide a bio for the user.";
    res.status(400).json({ errorMessage });
  } else {
    db.findById(id)
      .then(user => {
        if (user) {
          db.update(id, changes)
            .then(updates => {
              if (updates === 1) {
                db.findById(id)
                  .then(updatedUser => res.status(200).json(updatedUser))
                  .catch(err => {
                    const error = `The user with ID ${id} was updated but an error occurred in retrieving the updated data.`;
                    res.status(500).json({ error });
                  });
              } else if (updates > 1) {
                const message =
                  "ERROR: MORE THAN ONE USER WAS INADVERTENTLY UPDATED!";
                res.status(500).json({ message });
              } else {
                const message =
                  "The user information could not be modified (error in update process).";
                res.status(500).json({ message });
              }
            })
            .catch(err => {
              const message =
                "The user information could not be modified (error in resolving PUT request).";
              res.status(500).json({ message });
            });
        } else {
          const message = `No user with the specified ID [${id}] exists.`;
          res.status(404).json({ message });
        }
      })
      .catch(err => {
        const error =
          "The user information could not be modified (error in checking user data).";
        res.status(500).json({ error });
      });
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Running user server on 5000..."));
