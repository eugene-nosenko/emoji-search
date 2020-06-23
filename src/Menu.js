import React from "react";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import App from "./App";
import Favorites from "./Favorites";

const Menu = () => {
  return (
    <div className="Menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
      <Switch>
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/" exact component={App} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Menu;
