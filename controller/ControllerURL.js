const shortid = require("shortid");
const mongoose = require("mongoose");
const URL = require("../model/url");

async function generateShortUrl(req, res) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const shortUrl = shortid();

    await URL.create({
        longUrl: url,
        shortUrl: shortUrl,
        userId: new mongoose.Types.ObjectId(),  // Temporary dummy ObjectId
        visitHistory: [],
        totalClicks: 0,
    });

  const urls = await URL.find({});
return res.render("home", { 
    id: shortUrl,
   
})


    
}





async function HandleAnalytics(req, res) {

const shortId = req.params.shortId;
const result = await URL.findOne({shortUrl: shortId});
return res.json({
    totalClicks: result.visitHistory.length,
    visitHistory: result.visitHistory
});


}

module.exports = { generateShortUrl , HandleAnalytics};
