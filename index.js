const express = require("express");
const morgan = require("morgan");
const getBearerToken = require("get-twitter-bearer-token");
const helmet = require("helmet");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();
const app = express();

const twitter_consumer_key = process.env.API_KEY;
const twitter_consumer_secret = process.env.API_SECRET;

const PORT = process.env.PORT || 5000;

app.get("/:searchTerm", (req, res) => {
  console.log(req.params);
});

const server = app.listen(PORT, () => {
  console.log(`server is now listening on ${server.address().port}`);
});
