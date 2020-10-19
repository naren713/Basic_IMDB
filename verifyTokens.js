const JWT = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .send(`<p>Please <a href="/login">Log-in</a> to view this page</p>`);

  try {
    const verified = JWT.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
