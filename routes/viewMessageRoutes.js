const { Router } = require("express");
const viewMessageRouter = Router();
const { getMessage } = require("../controller/getMessage.js");

viewMessageRouter.get("/:index", getMessage);

module.exports = viewMessageRouter;
