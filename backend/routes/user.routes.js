const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/users.model");

//for registration of users

router.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  //check if any given field is empty
  if (!username || !email || !password)
    return res.status(400).json({ message: "Please fill every given field." });

  try {
    //check if user already exists
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ message: "User with given email already exists." });
    //if not
    const newUser = new User({ username, email, password });

    //hashing and updating password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        const savedUser = await newUser.save();
        //generating token with given id and sending
        jwt.sign(
          { id: savedUser.id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;

            res.status(201).json({
              token,
              user: {
                id: savedUser.id,
                username: savedUser.username,
                email: savedUser.email,
              },
            });
          }
        );
      });
    });
  } catch (error) {
    res.status(400).json({ message: "Error occured on adding user." });
  }
});

module.exports = router;
