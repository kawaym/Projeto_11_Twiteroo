import express from "express";
import cors from "cors";

const USER_DATA = [];

const TWEETS_DATA = [];

const app = express();

app.use(express.json(), cors());

app.post("/sign-up", (req, res) => {
  const user = req.body;
  if (!user.username || !user.avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    USER_DATA.push(user);
    res.status(201).send("OK");
  }
});

app.get("/sign-up", (req, res) => {
  res.send(USER_DATA);
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  if (!tweet.tweet) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    TWEETS_DATA.push(tweet);
    res.status(201).send("OK");
  }
});

app.get("/tweets", (req, res) => {
  const last_ten = TWEETS_DATA.slice(-10);
  last_ten.map((tweet) => {
    const current_user = USER_DATA.find(
      (user) => user.username === tweet.username
    );
    tweet.avatar = current_user.avatar;
  });
  res.send(last_ten.reverse());
});

app.listen(5000);
