const express = require("express");
const path = require("path");
const app = express();
import { Analytics } from "@vercel/analytics/next";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const data = {
    performers: [
      {
        name: "Jiawen Eric Guan",
        instagram: "j.s.erich",
        bio: 'Classical pianist, jazz pianist, and improviser, Jiawen "Eric" Guan is currently a Doctor of Musical Arts candidate at Boston University, where he studies with Professor Boaz Sharon. He completed his Master of Music in piano performance at the New England Conservatory in Boston, where he studied with Professor Hae Sun Paik. Jiawen has vast interests in all kinds of music and genres. He plays harpsichord in baroque ensembles, is an organist at a local church in Boston, and enjoys chamber music. Jiawen is also a composer and songwriter, writing short pieces and songs in unique styles across different genres.',
      },
      {
        name: "Lizzy Joo",
        instagram: "lizzy.joo",
        bio: "Lizzy Joo is a neurobiology graduate student at Boston University. An alumna of the Boston Philharmonic Youth Orchestra, she has participated in the Killington Music Festival and Apple Hill Chamber Music Festival, and continues to perform with ensembles throughout the Greater Boston area, including the MIT Chamber Music Society. She currently studies violin with Joshua Peckins. Outside of music, she enjoys making web applications and spends an unhealthy amount of time bookmarking restaurants on Google Maps and Beli.",
      },
    ],
  };
  console.log("Data being passed:", data);
  res.render("index", data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
