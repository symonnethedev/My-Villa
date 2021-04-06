import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Villa from "./images/mv3.jpg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header_icon" src={Villa} alt="" />
      </Link>

      <header className="header__center">
        <input type="text"></input>
        <SearchIcon />
      </header>

      <header className="header__right">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Avatar />
          <h3> My Account </h3>
        </Link>
      </header>
    </header>
  );
}

export default Header;
