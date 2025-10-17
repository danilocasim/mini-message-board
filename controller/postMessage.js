const { getDatabase } = require("../model/db.js");

async function postMessage(req, res) {
  const { message, user } = req.body;
  getDatabase().push({
    text: message,
    user: user,
    added: new Date().toDateString(),
  });
  res.redirect("/");
}

module.exports = { postMessage };
