// // const express = require("express");
// // const router = express.Router();
// // const User = require("../models/User");

// // // Save progress
// // router.post("/", async (req, res) => {
// //   const { userId, problemId } = req.body;

// //   const user = await User.findById(userId);

// //   user.progress.push({
// //     problemId,
// //     completed: true
// //   });

// //   await user.save();
// //   res.json({ message: "Progress saved" });
// // });

// // // Get user progress
// // router.get("/:userId", async (req, res) => {
// //   const user = await User.findById(req.params.userId);
// //   res.json(user.progress);
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const auth = require("../middleware/auth");

// // Save progress (SECURE)
// router.post("/", auth, async (req, res) => {
//   const { problemId } = req.body;

//   const user = await User.findById(req.userId);

//   const exists = user.progress.find(
//     p => p.problemId.toString() === problemId
//   );

//   if (!exists) {
//     user.progress.push({ problemId, completed: true });
//   }

//   await user.save();
//   res.json({ message: "Progress saved" });
// });

// // Get progress (SECURE)
// router.get("/", auth, async (req, res) => {
//   const user = await User.findById(req.userId)
//     .populate("progress.problemId");

//   res.json(user.progress);
// });

// module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const { problemId } = req.body;
  const user = await User.findById(req.userId);

  if (!user.progress.find(p => p.problemId == problemId)) {
    user.progress.push({ problemId, completed: true });
    await user.save();
  }

  res.json({ message: "Progress saved" });
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user.progress);
});

module.exports = router;
