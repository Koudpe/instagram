import React from "react";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../assets/profile.jpg";

import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className='sidebar'>
        <Profile
          username='firstname.surename'
          caption='Firstname Surename'
          urlText='Switch'
          iconSize='big'
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
};

export default Sidebar;
