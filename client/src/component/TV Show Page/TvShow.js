import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Card from "../Card";

const TvShow = () => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/getTrendingTv")
      .then((res) => {
        setTvShows(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap w-3/4 mx-auto">
        {tvShows.map((show) => {
          return (
            <div className="w-1/3">
              <Card {...show} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TvShow;
