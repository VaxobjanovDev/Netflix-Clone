import { NotificationAdd, Search } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useContext, useState } from "react";
import { Logo } from "../../svg/AllSvg";
import ProfileImg from "../../assests/Boy.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logout } from "../../authcontext/AuthActions";
import { AuthContext } from "../../authcontext/Authcontext";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const {dispatch}=useContext(AuthContext)

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="navbar-left-side">
          <Logo width={100} height={100} />
          <Link className="nav-link" to='/'>
            <span>Home Page</span>
          </Link>
          <Link className="nav-link" to='/series'>
            <span>Series</span>
          </Link>
          <Link className="nav-link" to='/movies'>
            <span>Movies</span>
          </Link>
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
              <span onClick={()=>dispatch(logout())}>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
