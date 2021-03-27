import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
          />
        </Link>
      </div>
      <div className="header__middle">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__right" />
        <AppsIcon className="header__right" />
        <NotificationsActiveIcon className="header__right" />
        <Avatar
          src="https://nation.com.pk/print_images/large/2017-08-22/fahad-the-man-behind-blockbusters-1503421040-9678.jpg"
          className="header__right"
        />
      </div>
    </div>
  );
}

export default Header;
