import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  function toggleLike() {
    setIsLiked(!isLiked);
    // updater callback
    setClicks((currentValue) => currentValue + 1);
    // setClicks((currentValue) => currentValue + 1);
  }

  return (
    <div>
      <h3>Clicks - {clicks}</h3>
      <h2 onClick={toggleLike}>
        {isLiked == false ? (
          <i
            className="fa-solid fa-heart"
            style={{ color: "red", fontSize: "7rem" }}
          ></i>
        ) : (
          <i className="fa-regular fa-heart" style={{ fontSize: "7rem" }}></i>
        )}
      </h2>
    </div>
  );
}
