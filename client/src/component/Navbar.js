import React from "react";
import logo from "../image/TMDB_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary">
      <div className="flex p-6 justify-between w-3/4 mx-auto">
        <header id="brandLogo" className="flex">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="TMDB logo" />
          </Link>
          <div id="link" className="flex pt-2 ml-6 list-none">
            <li className="text-white mx-2 font-bold cursor-pointer">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="text-white mx-2 font-bold cursor-pointer">
              <Link to="/tvshows">TV Shows</Link>
            </li>
          </div>
        </header>
        <div id="button" className="flex">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
