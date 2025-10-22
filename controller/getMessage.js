const db = require("../db/queries");

async function getAllMessage(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
}

async function getMessage(req, res) {
  const { index } = req.params;
  const message = await db.getMessage(index);

  res.render("message", { message: message[0] });
}

module.exports = { getAllMessage, getMessage };
