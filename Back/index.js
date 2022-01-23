import express from "express";
import cors from "cors";

const USER_DATA = [];

const TWEETS_DATA = [];

const app = express();

app.use(express.json(), cors());

app.post("/sign-up", (req, res) => {
  const user = req.body;
  USER_DATA.push(user);
  res.send("OK");
});

app.get("/sign-up", (req, res) => {
  res.send(USER_DATA);
})

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  TWEETS_DATA.push(tweet);
  res.send("OK");
})
app.get("/tweets", (req, res) => {
  const last_ten = TWEETS_DATA.slice(-10);
  last_ten.map(tweet => {
    const current_user = USER_DATA.find(user => user.name === tweet.name);
    tweet.avatar = current_user.avatar;
  })
  res.send(last_ten.reverse());
});

app.listen(5000);
