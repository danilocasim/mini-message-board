const { body } = require("express-validator");

const alphaErr = "must only contain letters.";
const usernamelengthErr = "must be between 1 and 10 characters";

const validateUser = [
  body("username")
    .trim()
    .isAlpha()
    .withMessage(`Username ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Username ${usernamelengthErr}`),
  body("message")
    .trim()
    .isLength({ min: 15 })
    .withMessage(`Message must contain atleast 15 characters`),
];

module.exports = validateUser;
