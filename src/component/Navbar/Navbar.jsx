import { NotificationAdd, Search } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";
import { Logo } from "../../svg/AllSvg";
import ProfileImg from "../../assests/Boy.jpg";
import "./Navbar.css";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="navbar-left-side">
          <Logo width={100} height={100} />
          <span>Home Page</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="navbar-right-side">
          <Search className="icons" />
          <span>KID</span>
          <NotificationAdd className="icons" />
          <img src={ProfileImg} alt="Profile-img" />
          <div className="profile">
            <ArrowDropDownIcon className="icons" />
            <div className="options">
              <span>Profile</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
