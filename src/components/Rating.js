import React, { useState } from "react";

function Rating() {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState(0);
  let arr = new Array(5).fill(0);
  console.log(rating);

  return (
    <div className="container">
      {arr.map((currValue, index) => {
        return (
          <span
            key={index}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
            className={
              (hover == 0 && index < rating) || index < hover
                ? "color"
                : "uncolor"
            }
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
