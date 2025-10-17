const { getDatabase } = require("../model/db.js");

async function getAllMessage(req, res) {
  const messages = getDatabase();
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
}

async function getMessage(req, res) {
  const messages = getDatabase();

  const { index } = req.params;
  res.render("message", {
    message: messages.find((message, messageIndex) => index == messageIndex),
  });
}

module.exports = { getAllMessage, getMessage };
