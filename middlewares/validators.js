const { body } = require("express-validator");

const alphaErr = "must only contain letters.";
const usernamelengthErr = "must be contain atleast 1 character";

const validateUser = [
  body("username")
    .trim()
    .isAlpha()
    .withMessage(`Username ${alphaErr}`)
    .isLength({ min: 1 })
    .withMessage(`Username ${usernamelengthErr}`),
  body("message")
    .trim()
    .isLength({ min: 10 })
    .withMessage(`Message must contain atleast 10 characters`),
];

module.exports = validateUser;
