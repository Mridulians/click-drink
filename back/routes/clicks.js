const express = require("express");
const ClicksSchema = require("../models/Clicks");
const router = express.Router();




// save data to the database
router.post("/save", async (req, res) => {
  const { username, clicks, dollars } = req.body;
  
  try {
    // Check if the user already exists in the database
    let user = await ClicksSchema.findOne({ username });

    if (user) {
      // If the user exists, update the existing entry
      user.clicks = clicks;
      user.dollars = dollars;
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
