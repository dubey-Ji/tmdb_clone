const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const axios = require("axios");

const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

// Routes
app.get("/getnowplaying", (req, res) => {
  let results;
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      results = response.data.results;
      res.send(results);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/getTrendingTv", (req, res) => {
  let results;
  axios
    .get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API_KEY}`
    )
    .then((response) => {
      results = response.data.results;
      res.send(results);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/getupcomingmovie", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      let results = response.data.results;
      res.send(results);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/getTopRated", (req, res) => {
  axios
    .get(
      `
https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      let results = response.data.results;
      res.send(results);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/getlatestmovie", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`
    )
    .then((response) => {
      let results = response.data.results;
      res.send(results);
    })
    .catch((err) => console.log(err.message));
});

app.get("/gettvtoprated", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      let results = response.data.results;
      res.send(results);
    })
    .catch((err) => console.log(err.message));
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
