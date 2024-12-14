const express = require("express");
const ClicksSchema = require("../models/Clicks");
const router = express.Router();

// save data to the database
router.post("/save", async (req, res) => {
  const { username, clicks, dollars , tonWalletAddress} = req.body;

  try {
    // Check if the user already exists in the database
    let user = await ClicksSchema.findOne({ username });

    if (user) {
      // If the user exists, update the existing entry
      user.clicks = clicks;
      user.dollars = dollars;
      user.tonWalletAddress = tonWalletAddress;
      await user.save();
      return res.status(200).json({ message: "User data updated!" });
    } else {
      // If the user does not exist, create a new entry
      const newUser = new ClicksSchema({ username, clicks, dollars });
      await newUser.save();
      return res.status(201).json({ message: "New user created!" });
    }
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ message: "Error saving data" });
  }
});

// Fetch user data by username
router.get("/getdata/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const user = await ClicksSchema.findOne({ username });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

// Fetch all data (Admin Panel)
router.get("/getdata", async (req, res) => {
  try {
    const data = await ClicksSchema.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;
