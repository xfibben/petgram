import { useState, useEffect } from "react";

export default function Photo() {
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setLikes(likes + 1);
    console.log(likes);
  };
  const renderLikes = () => {
    if (likes != 0) {
      return (
        <img
          className={"h-full rounded-3xl"}
          src={
            "https://i.pinimg.com/originals/a6/13/12/a61312b380967c5bdb237e25112bcda8.png"
          }
        />
      );
    } else {
      return (
        <img
          className={"h-full p-3 rounded-3xl"}
          src={
            "https://www.pngitem.com/pimgs/m/63-630682_transparent-heart-doodle-png-transparent-instagram-heart-icon.png"
          }
        />
      );
    }
  };
  return (
    <div
      name={"Photo-card"}
      className={
        "grid w-1/2 h-1/3 mx-auto border-2 my-10 rounded-3xl shadow-2xl py-2"
      }
    >
      <img
        className={"w-2/3 mx-auto "}
        src={
          "https://ca-times.brightspotcdn.com/dims4/default/c3f4b96/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"
        }
      />
      <div className={"h-10 flex w-2/3 mx-auto"} onClick={handleClick}>
        {renderLikes()}
        <h1 className={"text-xl grid content-center"}>{likes}</h1>
      </div>
    </div>
  );
}
