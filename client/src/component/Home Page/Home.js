import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Card from "../Card";
import CardTrailer from "../CardTrailer";
import Footer from "../Footer";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [movieTv, setMovieTv] = useState([]);
  const [fetchPopular, setFetchPopular] = useState("getnowplaying");
  const [fetchMovieTv, setFetchMovieTv] = useState("getlatestmovie");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${fetchPopular}`)
      .then((res) => {
        setPopular(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fetchPopular]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${fetchMovieTv}`)
      .then((res) => {
        setMovieTv(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fetchMovieTv]);

  const handleOnFetchPopularClick = (e) => {
    const element = document.getElementById(e.target.id);
    const btn = document.getElementsByClassName("btn");
    // console.log(btn.length);
    for (let i = 0; i < btn.length; i++) {
      const classes = btn[i].className.split(" ");
      if (classes.includes("active")) {
        btn[i].classList.remove("active");
      }
    }
    element.classList.add("active");
    const data = e.target.value;
    setFetchPopular(data);
  };

  const handleOnFetchMovieTv = (e) => {
    const element = document.getElementById(e.target.id);
    const btn = document.getElementsByClassName("btnn");
    for (let i = 0; i < btn.length; i++) {
      const classes = btn[i].className.split(" ");
      if (classes.includes("active")) {
        btn[i].classList.remove("active");
      }
    }
    element.classList.add("active");
    const data = e.target.value;
    setFetchMovieTv(data);
  };

  return (
    <div>
      <Navbar />
      <section id="hero">
        <div className="hero-content grid grid-cols-1 w-screen mx-auto sm:w-10/12">
          <div className="content_wrapper py-36 pl-4 sm:px-16">
            <div className="title">
              <h2 className="text-4xl sm:text-6xl text-white mb-2 font-display tracking-widest">
                Welcome.
              </h2>
              <h3 className="text-xl text-white mb-2 font-display tracking-widest">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>
            <div className="search">
              <form className="flex flex-col sm:block">
                <input
                  className="mr-6 sm:mr-0 sm:w-11/12 px-4 py-3 rounded-full focus:outline-none"
                  type="text"
                  name="query"
                  id="searchBox"
                  placeholder="Search for a movie, tv show, person......"
                />
                <input
                  className="w-5/12 mx-auto mt-2 sm:mt-0 sm:w-max px-8 py-3 bg-gradient-to-r from-tmdbLightGreen from-tmdbLightBlue rounded-full sm:-ml-16 cursor-pointer text-white font-semibold hover:text-black"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="movieList" className="w-3/4 mx-auto mt-8">
        <div className="head-title flex items-center space-x-10">
          <div className="title">
            <h1 className="text-4xl font-semibold">What's Popular</h1>
          </div>
          <div className="links flex border border-black rounded-full list-none">
            <li className="rounded-full">
              <button
                className="px-4 rounded-full active btn"
                id="nowplaying"
                value="getnowplaying"
                onClick={handleOnFetchPopularClick}
              >
                Streaming
              </button>
            </li>
            <li className="rounded-full">
              <button
                className="px-4 rounded-full btn"
                id="trendingtv"
                value="getTrendingTv"
                onClick={handleOnFetchPopularClick}
              >
                On Tv
              </button>
            </li>
            <li className="rounded-full">
              <button
                className="px-4 rounded-full btn"
                id="upcomingmovie"
                value="getupcomingmovie"
                onClick={handleOnFetchPopularClick}
              >
                For Rent
              </button>
            </li>
            <li className="rounded-full">
              <button
                className="px-4 rounded-full btn"
                id="toprated"
                value="getTopRated"
                onClick={handleOnFetchPopularClick}
              >
                In Theaters
              </button>
            </li>
          </div>
        </div>
        <div className="movie-card-list flex overflow-auto">
          {popular.map((movies) => {
            return (
              <div className="w-36 ml-4">
                <Card {...movies} />
              </div>
            );
          })}
        </div>
      </section>
      <section id="movieListTv" className="w-3/4 mx-auto mt-8">
        <div className="head-title flex items-center space-x-10">
          <div className="title">
            <h1 className="text-4xl font-semibold">Free To Watch</h1>
          </div>
          <div className="links flex border border-black rounded-full list-none">
            <li className="rounded-full">
              <button
                className="px-4 rounded-full active btnn"
                id="latestmovie"
                value="getlatestmovie"
                onClick={handleOnFetchMovieTv}
              >
                Movies
              </button>
            </li>
            <li className="rounded-full">
              <button
                className="px-4 rounded-full btnn"
                id="tv"
                value="gettvtoprated"
                onClick={handleOnFetchMovieTv}
              >
                Tv
              </button>
            </li>
          </div>
        </div>
        <div className="movie-card-list flex overflow-auto">
          {movieTv.map((movies) => {
            return (
              <div className="w-36 ml-4">
                <Card {...movies} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Trailers */}
      <section id="trailers" className="w-3/4 mx-auto">
        <div className="pt-8">
          <div className="head-title flex items-center space-x-10">
            <div className="title">
              <h1 className="text-4xl font-semibold text-white ml-4">
                Latest Trailers
              </h1>
            </div>
            <div className="links flex border border-black rounded-full list-none">
              <li className="rounded-full">
                <button
                  className="px-4 rounded-full active btn"
                  id="nowplaying"
                  value="getnowplaying"
                  onClick={handleOnFetchPopularClick}
                >
                  Streaming
                </button>
              </li>
              <li className="rounded-full">
                <button
                  className="px-4 rounded-full btn"
                  id="trendingtv"
                  value="getTrendingTv"
                  onClick={handleOnFetchPopularClick}
                >
                  On Tv
                </button>
              </li>
              <li className="rounded-full">
                <button
                  className="px-4 rounded-full btn"
                  id="upcomingmovie"
                  value="getupcomingmovie"
                  onClick={handleOnFetchPopularClick}
                >
                  For Rent
                </button>
              </li>
              <li className="rounded-full">
                <button
                  className="px-4 rounded-full btn"
                  id="toprated"
                  value="getTopRated"
                  onClick={handleOnFetchPopularClick}
                >
                  In Theaters
                </button>
              </li>
            </div>
          </div>
          <div className="movie-card-list flex overflow-auto">
            {movieTv.map((movies) => {
              return (
                <div className="w-72 ml-4">
                  <CardTrailer {...movies} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
