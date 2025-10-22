const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(index) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1 LIMIT 1",
    [index]
  );
  return rows;
}

async function postMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)",
    [username, message, new Date().toDateString()]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
};
