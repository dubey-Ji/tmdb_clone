import React from "react";
import posterimage from "../image/poster_img.jpg";

const IMAGE_API = "https://image.tmdb.org/t/p/original";

const Card = ({ id, title, poster_path, vote_average, release_date }) => {
  return (
    <div
      className="card mx-5 my-6 transition duration-500 ease-in-out"
      style={{ width: "inherit" }}
    >
      <div className="card-component">
        <div className="poster relative">
          <img
            className="rounded-xl"
            src={IMAGE_API + poster_path}
            alt={title}
          />
          <div className="rating w-10 h-10 bg-black rounded-full absolute -bottom-4 border-red-400 border-2 left-4">
            <p className="flex justify-center pt-2.5 text-xs text-white">
              {vote_average}
            </p>
          </div>
        </div>

        <div className="card-info mt-4 ml-2">
          <h1 className="card-title font-bold">{title}</h1>
          <p className="release-date">{release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
