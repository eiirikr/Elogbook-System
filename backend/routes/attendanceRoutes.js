const express = require("express");
const attendanceController = require("../controllers/attendanceController");

const router = express.Router();

router.post("/login", attendanceController.login);
router.post("/logout", attendanceController.logout);
router.get("/records", attendanceController.getRecords);

module.exports = router;
