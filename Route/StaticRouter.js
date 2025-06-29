const express = require("express");
 


const URL = require("../model/url");  // Correctly import URL model
const router = express.Router();


router.get("/", async (req, res) => {
  const allURLs = await URL.find({});
  res.render("home", { allURLs }); // pass with correct key
});

module.exports = router;