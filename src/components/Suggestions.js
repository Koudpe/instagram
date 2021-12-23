import React from "react";
import Profile from "./Profile";

import "../styles/Suggestions.scss";

const Suggestions = () => {
  return (
    <div className='suggestions'>
      <div className='titleContainer'>
        <div className='title'>Suggestions For You</div>
        <a href='/'>See All</a>
      </div>

      <Profile
        caption='Follouwed by mapvauld + 3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Follouwed by mapvauld + 3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Follouwed by mapvauld + 3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Follouwed by mapvauld + 3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
      <Profile
        caption='Follouwed by mapvauld + 3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
        storyBorder={true}
      />
    </div>
  );
};

export default Suggestions;
