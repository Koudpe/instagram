import React from "react";
import logo from "../assets/instagramLogo.png";
import searchIcon from "../assets/searchIcon.png";
import Menu from "./Menu.js";

import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='container'>
        <img className='logo' src={logo} alt='instagram logo' />
        <div className='search'>
          <img className='searchIcon' src={searchIcon} alt='search icon' />
          <span className='searchText'>Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navigation;
