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
          <h2 style={{ color: "#434343" }}>I am Nitesh Singh Rawat</h2>
        ) : (
          <h2 style={{ color: "#18c683" }}>Open Name</h2>
        )}
      </div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
