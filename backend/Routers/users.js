const express = require("express");
const router = express.Router();

const registerUser = require("../controllers/RegisterUser");
const loginUser = require("../controllers/LoginUser");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
