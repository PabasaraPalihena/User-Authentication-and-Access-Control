const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.method.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "60d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required().label("FullName"),
    userName: Joi.string().required().label("UserName"),
    role: Joi.string().required().label("Role"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
