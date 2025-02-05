const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["visitor", "intern", "employer"],
    required: true,
  },
  loginTime: { type: Date, default: Date.now },
  logoutTime: { type: Date },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
