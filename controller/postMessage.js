const { getDatabase } = require("../model/db.js");

async function postMessage(req, res) {
  const { message, user } = req.body;
  res.redirect("/");

  getDatabase().push({
    text: message,
    user: user,
    added: new Date().toDateString(),
  });
}

module.exports = { postMessage };
