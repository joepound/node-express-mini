const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

// 50-50 success chance error check (for testing only)
function fiftyFifty(res) {
  return Math.floor(Math.random() * 2)
    ? res
    : Promise.reject({
        message: "TRY AGAIN"
      });
}

function find() {
  return fiftyFifty(db("users"));
}

function findById(id) {
  return fiftyFifty(
    db("users")
      .where({ id: Number(id) })
      .first()
  );
}

function insert(user) {
  return fiftyFifty(
    db("users")
      .insert(user)
      .then(ids => ({ id: ids[0] }))
  );
}

function update(id, user) {
  return fiftyFifty(
    db("users")
      .where("id", Number(id))
      .update(user)
  );
}

function remove(id) {
  return fiftyFifty(
    db("users")
      .where("id", Number(id))
      .del()
  );
}
