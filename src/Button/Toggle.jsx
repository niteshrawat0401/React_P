import React from "react";
import { useState } from "react";

export const Toggle = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div>
        {show ? (
          <h2 style={{ color: "yellow" }}>I am Nitesh Singh Rawat</h2>
        ) : (
          <h2 style={{ color: "red" }}>Open Name</h2>
        )}
      </div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
