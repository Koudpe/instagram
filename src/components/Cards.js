import React from "react";
import Stories from "./Stories";
import "../styles/Cards.scss";
import Card from "./Card";
const Cards = () => {
  const commentsOne = [
    {
      user: "user",
      text: "Text",
      id: 1,
    },
    {
      user: "user1",
      text: "Text",
      id: 2,
    },
    {
      user: "use2",
      text: "Text",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "user",
      text: "Text",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "user",
      text: "Text",
      id: 5,
    },
    {
      user: "user1",
      text: "Text",
      id: 6,
    },
    {
      user: "use2",
      text: "Text",
      id: 7,
    },
    {
      user: "use3",
      text: "Text",
      id: 8,
    },
    {
      user: "use4 ",
      text: "Text",
      id: 9,
    },
  ];
  return (
    <div className='cards'>
      <Stories />
      <Card
        accountName='name'
        storyBorder={true}
        image='https://picsum.photos/800/900'
        comments={commentsOne}
        likedByText='likedByMe'
        likedByNumber={20}
        hours={1}
      />
      <Card
        accountName='name1'
        storyBorder={true}
        image='https://picsum.photos/800'
        comments={commentsTwo}
        likedByText='likedByMe1'
        likedByNumber={60}
        hours={2}
      />
      <Card
        accountName='name2'
        storyBorder={true}
        image='https://picsum.photos/800/1000'
        comments={commentsThree}
        likedByText='likedByMe2'
        likedByNumber={189}
        hours={5}
      />
    </div>
  );
};

export default Cards;
