import express from "express";
import cors from "cors";

let user_data = [
  {
    username: "Equipe Twiteroo",
    avatar:
      "https://bootcampra.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e9da2a7-eb35-45d8-bdab-81e5dcf58be8%2Fimage_2022-01-20_171006.png?table=block&id=10e3a3f1-1b2c-4ddf-9a42-3077b59876f8&spaceId=f797e032-5eb2-4c9d-beb7-cd7181e19e47&width=250&userId=&cache=v2",
  },
];

let tweets_data = [
  {
    username: "Equipe Twiteroo",
    tweet: "Bem-vinde ao Twiteroo",
  },
];

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/sign-up", (req, res) => {
  res.send("Hello, It's me");
});
app.get("/tweets", (req, res) => {
  res.send("I was wondering if after all these years");
});

app.listen(5000);
