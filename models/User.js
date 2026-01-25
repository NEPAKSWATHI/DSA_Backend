// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   progress: [
//     {
//       problemId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Problem"
//       },
//       completed: Boolean
//     }
//   ]
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  progress: [
    {
      problemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problem"
      },
      completed: Boolean
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
