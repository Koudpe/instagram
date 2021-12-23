import React from "react";

import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Inbox } from "../assets/inbox.svg";
import { ReactComponent as Explore } from "../assets/explore.svg";
import { ReactComponent as Notifications } from "../assets/notifications.svg";
import image from "../assets/profile.jpg";
import ProfileIcon from "./ProfileIcon.js";

import "../styles/Menu.scss";

const Menu = () => {
  return (
    <div className='menu'>
      <Home className='icon' />
      <Inbox className='icon' />
      <Explore className='icon' />
      <Notifications className='icon' />
      <ProfileIcon iconSize='small' image={image} />
    </div>
  );
};

export default Menu;
