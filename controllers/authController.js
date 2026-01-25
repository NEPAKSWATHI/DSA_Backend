// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");



// exports.register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // check missing fields
//     if (!name || !email || !password) {
//       return res.status(400).json({ msg: "All fields required" });
//     }

//     // check existing user
//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ msg: "Email already exists" });
//     }

//     const hashed = await bcrypt.hash(password, 10);

//     await User.create({
//       name,
//       email,
//       password: hashed
//     });

//     res.json({ message: "User registered" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(404).json({ msg: "User not found" });

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(400).json({ msg: "Wrong password" });

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//   res.json({ token, userId: user._id });
// };

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashed });
  res.json({ message: "User registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, userId: user._id });
};
