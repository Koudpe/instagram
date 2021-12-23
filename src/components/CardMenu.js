import React from "react";
import { ReactComponent as Inbox } from "../assets/inbox.svg";
import { ReactComponent as Comments } from "../assets/comments.svg";
import { ReactComponent as Notifications } from "../assets/notifications.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";

import "../styles/CardMenu.scss"

const CardMenu = () => {
  return (
    <div className='cardMenu'>
      <div className='interactions'>
        <Notifications className='icon' />
        <Comments className='icon' />
        <Inbox className='icon' />
      </div>
      <Bookmark className='icon' />
    </div>
  );
};

export default CardMenu;
