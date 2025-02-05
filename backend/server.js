const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const attendanceRoutes = require("./routes/attendanceRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/attendance", attendanceRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
