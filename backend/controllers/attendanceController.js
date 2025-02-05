const Attendance = require("../models/Attendance");

exports.login = async (req, res) => {
  const { name, role } = req.body;
  try {
    const newEntry = new Attendance({ name, role });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = async (req, res) => {
  const { name } = req.body;
  try {
    const entry = await Attendance.findOne({ name, logoutTime: null });
    if (!entry)
      return res.status(404).json({ error: "No active session found" });
    entry.logoutTime = Date.now();
    await entry.save();
    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
