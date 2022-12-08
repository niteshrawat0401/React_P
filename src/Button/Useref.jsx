import React from "react";
import { useState, useRef } from "react";

const Useref = () => {
  const [change, setChange] = useState(true);
  const box = useRef(0);
  const box1 = useRef(0);
  const box2 = useRef(0);
  const box3 = useRef(0);
  const box4 = useRef(0);

  const handleColor1 = () => {
    // setChange((current) => !current);
    box.current.style.backgroundColor = "red";
  };
  const handleColor2 = () => {
    box1.current.style.backgroundColor = "blue";
  };
  const handleColor3 = () => {
    box2.current.style.backgroundColor = "yellow";
  };
  const handleColor4 = () => {
    box3.current.style.backgroundColor = "pink";
  };
  const handleColor5 = () => {
    box4.current.style.backgroundColor = "black";
  };

  return (
    <div>
      <div>
        <button onClick={handleColor1} ref={box4}>
          Toggle1
        </button>
        <button ref={box3} onClick={handleColor2}>
          Toggle2
        </button>
        <button ref={box} onClick={handleColor3}>
          Toggle3
        </button>
        <button ref={box1} onClick={handleColor4}>
          Toggle4
        </button>
        <button ref={box2} onClick={handleColor5}>
          Toggle5
        </button>
      </div>
    </div>
  );
};

export default Useref;
