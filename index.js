const express = require("express");
const URL = require("./model/url");
const path = require("path");

const connectToDatabase = require("./conectionMongoose");

const urlRoute = require("./Route/urlRoute");
const StaticRouter = require("./Route/StaticRouter");

const app = express();

connectToDatabase("mongodb://localhost:27017/urlShortener").then(() =>
  console.log("Database Connected")
);

const port = 3000;

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));





app.use("/url", urlRoute);
app.use("/", StaticRouter);

// Redirect route
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortUrl: shortId },
    { $push: { visitHistory: new Date() } },
    { new: true }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.longUrl);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
