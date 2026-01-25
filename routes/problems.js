// const express = require("express");
// const router = express.Router();
// const Problem = require("../models/Problem");

// // Add new problem
// router.post("/", async (req, res) => {
//   const problem = await Problem.create(req.body);
//   res.json(problem);
// });

// // Get all problems
// router.get("/", async (req, res) => {
//   const problems = await Problem.find();
//   res.json(problems);
// });

// // Get problems by chapter
// router.get("/chapter/:name", async (req, res) => {
//   const problems = await Problem.find({ chapter: req.params.name });
//   res.json(problems);
// });


// module.exports = router;
const router = require("express").Router();
const Problem = require("../models/Problem");

router.get("/", async (req, res) => {
  const data = await Problem.find();
  res.json(data);
});

module.exports = router;
