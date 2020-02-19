const getBearerToken = require("get-twitter-bearer-token");
require("dotenv").config();
const twitter_consumer_key = process.env.API_KEY;
const twitter_consumer_secret = process.env.API_SECRET;

getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
  if (err) {
    // handle error
  } else {
    // bearer token
    console.log(res.body.access_token);
  }
});
