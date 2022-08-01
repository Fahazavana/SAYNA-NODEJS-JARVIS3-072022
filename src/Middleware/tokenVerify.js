const jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
  console.log(req.cookie);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWTSECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user);
    next();
  });
}

module.exports = authenticateToken;
