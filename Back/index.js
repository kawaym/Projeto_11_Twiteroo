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

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  TWEETS_DATA.push(tweet);
  res.send("OK");
})


app.get("/tweets", (req, res) => {
  res.send("I was wondering if after all these years");
});

app.listen(5000);
