const { Router } = require("express");
const notFoundRouter = Router();

notFoundRouter.get("/", (req, res) => {
  res.status(404);
  res.render("404");
});

module.exports = notFoundRouter;
