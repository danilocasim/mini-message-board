const { Router } = require("express");
const indexRouter = Router();
const { getAllMessage } = require("../controller/getMessage.js");

indexRouter.get("/", getAllMessage);

module.exports = indexRouter;
