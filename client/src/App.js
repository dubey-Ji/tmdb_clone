import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home Page/Home";
import Movies from "./component/Movies Page/Movies";
import TvShow from "./component/TV Show Page/TvShow";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/tvshows">
        <TvShow />
      </Route>
    </Switch>
  );
};

export default App;
