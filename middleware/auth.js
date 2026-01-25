// const jwt = require("jsonwebtoken");
// module.exports = (req, res, next) => {
//   const header = req.header("Authorization");
//   if (!header) return res.status(401).json("No token");

//   const token = header.split(" ")[1];   // VERY IMPORTANT LINE

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     console.log("JWT ERROR:", err.message);
//     res.status(401).json("Invalid token");
//   }
// };
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json("Invalid token");
  }
};
