import React from 'react'
import { useState, useRef } from 'react'
/*
Create a screen with 5 stars on it. 
(You can use asterisk(*) key instead of stars).
Initially all stars are black. 
When the user clicks on any star, 
all the stars before the clicked star
should become blue, 
the star clicked should become red 
and all the stars after the clicked star 
should remain black.
For eg: If you clicked 3rd star then
1st and 2nd star will become blue, 
the 3rd star will become red and 
the 4th and 5th star will become black

You have to code this in react. 
Do not use any external libraries.
*/
const Star = () => {
  const [stars, setStars] = useState(Array(5).fill('black'));

  const handleClick = (index) => {
    const updatedStars = stars.map((star, i) => {
      if (i < index) return 'blue';
      if (i === index) return 'red';
      return 'black';
    });
    setStars(updatedStars);
  };

  return (
    <div>
    <div>
      {stars.map((color, index) => (
        <button
          key={index}
          style={{ width: "15rem",height: "3rem", cursor: 'pointer', background : color }}
          onClick={() => handleClick(index)}
        >
          *
        </button>
      ))}
    </div>
    </div>
  )
}

export default Star