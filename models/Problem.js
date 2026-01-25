// const mongoose = require("mongoose");

// const problemSchema = new mongoose.Schema({
//   chapter: String,
//   title: String,
//   youtube: String,
//   leetcode: String,
//   article: String,
//   level: String
// });

// module.exports = mongoose.model("Problem", problemSchema);
const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  chapter: String,
  title: String,
  youtube: String,
  leetcode: String,
  article: String,
  level: String
});

module.exports = mongoose.model("Problem", problemSchema);
