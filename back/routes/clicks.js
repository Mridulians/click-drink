const express = require("express");
const Clicks = require("../models/Clicks");
const router = express.Router();

// Save clicks and dollars
router.post("/save", async (req, res) => {
  const { clicks, dollars } = req.body;

  try {
    const newClicks = new Clicks({ clicks, dollars });
    await newClicks.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// Fetch all data (Admin Panel)
router.get("/", async (req, res) => {
  try {
    const data = await Clicks.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;
