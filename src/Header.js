import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="component-header">
      <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt="" />
      <Link to="/">Emoji Search</Link>
      <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" width="32" height="32" alt="" />
      <div className="Menu">
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Header;
