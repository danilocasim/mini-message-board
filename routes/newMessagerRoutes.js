const { Router } = require("express");
const newMessageRouter = Router();
const { postMessage } = require("../controller/postMessage");

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", postMessage);

module.exports = newMessageRouter;
