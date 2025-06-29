const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ type: Date }],
    totalClicks: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
