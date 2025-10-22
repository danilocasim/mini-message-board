const db = require("../db/queries");
const { validationResult, matchedData } = require("express-validator");

const validateUser = require("../middlewares/validators");

exports.postMessage = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", { errors: errors.array() });
    }

    const { message, username } = matchedData(req);

    await db.postMessage(username, message);
    res.redirect("/");
  },
];
