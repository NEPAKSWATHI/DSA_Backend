// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const authRoutes = require("./routes/auth");
// app.use("/api/auth", authRoutes);

// const problemRoutes = require("./routes/problems");
// app.use("/api/problems", problemRoutes);
    
// const progressRoutes = require("./routes/progress");
// app.use("/api/progress", progressRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log("Mongo error:", err));

// app.get("/", (req, res) => {
//   res.send("DSA Tracker Backend Running 🚀");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/problems", require("./routes/problems"));
app.use("/api/progress", require("./routes/progress"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.listen(5000, () => console.log("Server running"));
