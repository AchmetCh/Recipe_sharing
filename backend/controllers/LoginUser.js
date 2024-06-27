const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/User');
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(`Email: ${email}`);

    const user = await User.findOne({ email });

    console.log(`User: ${user}`);

    
    if (!user) {
      console.log(`Can't verify user...`);
      return res.status(401).send({ message: "Can't verify user..." });
    }

  
    const validPassword = await bcrypt.compare(password, user.password);

    console.log(`Valid Password: ${validPassword}`);

  
    if (!validPassword) {
      console.log(`Invalid Password`);
      return res.status(401).send({ message: "Invalid Password" });
    }

  
    const token = jwt.sign({id : user._id , email : user.email} , PRIVATE_KEY);
    console.log(`Token: ${token}`);
    res.status(200).send(token);

  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).send({ message: "Unable to Log in..." });
  }
};

 
module.exports = loginUser;
