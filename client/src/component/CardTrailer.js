import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/original";

const CardTrailer = ({ id, title, backdrop_path }) => {
  return (
    <div
      className="card mx-5 my-6 transition duration-500 ease-in-out"
      style={{ width: "inherit" }}
    >
      <div className="card-component">
        <div className="poster relative">
          <img
            className="rounded-xl"
            src={IMAGE_API + backdrop_path}
            alt={title}
          />
          <span className="absolute top-10 left-28">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className="card-info mt-4 ml-2">
          <h1 className="card-title font-bold text-center text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardTrailer;
