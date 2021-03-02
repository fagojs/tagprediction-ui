const jwt = require("jsonwebtoken");

auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  //if token is none or not on that header
  if (!token) return res.status(401).json({ message: "Unauthorized access." });

  //get decoded token or user using secret key
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    res.end();
    next();
  } catch (error) {
    res.status(400).json({ message: "Token not specified." });
  }
};

module.exports = auth;
