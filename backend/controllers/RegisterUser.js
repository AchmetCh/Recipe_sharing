const bcrypt = require("bcrypt");
const User = require("../models/User");
require("dotenv").config();
const SALT_ROUNDS = +process.env.SALT_ROUNDS;

const registerUser = async (req, res) => {
  try {
    const findUser = await User.findOne({req.body.email})
    if (findUser) {
      return res.status(400).json({ message: "User already exists" });
    } 
    bcrypt.hash(req.body.password, SALT_ROUNDS).then((hashedPassword) => {
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Registered Successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    });
  } catch (error) {
    res.status(500).send({
      message: "Password was not hashed successfully",
      error,
    });
  }
};

module.exports = registerUser;
