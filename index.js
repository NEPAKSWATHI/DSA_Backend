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

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"));

// app.listen(5000, () => console.log("Server running"));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});