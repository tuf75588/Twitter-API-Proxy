const express = require("express");
const morgan = require("morgan");
const getBearerToken = require("get-twitter-bearer-token");
const helmet = require("helmet");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();
const app = express();
app.use(express.json());
const twitter_consumer_key = process.env.API_KEY;
const twitter_consumer_secret = process.env.API_SECRET;

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("common"));
const TWITTER_BASE_URL = "https://api.twitter.com/1.1";
app.get("/tweets", async (req, res) => {
  let response = await fetch(
    `${TWITTER_BASE_URL}/search/tweets.json?q=coding garden`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_TOKEN}`
      }
    }
  );
  let data = await response.json();
  res.json(data);
});

const server = app.listen(PORT, () => {
  console.log(`server is now listening on ${server.address().port}`);
});
