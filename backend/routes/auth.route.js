const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/users.model");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

//FOR SINING IN

router.post("/user", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Please fill every given field." });

  try {
    const user = await User.findOne({ email });
    if (!user)
      res.status(400).json({ message: "User with that email doesn't exist." });
    //comparing password for validation and authorization
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials." });
      //generate token signing give id and only authorized gets it
      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  } catch (error) {
    res.status(400).json({ message: "Error occured on logging in." });
  }
});

//getting user data by authorized only
router.get("/user", auth, async (req, res) => {
  const user = await User.findById(req.user.id).exclude("password"); //exclude password
  res.json(user);
});

module.exports = router;
