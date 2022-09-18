import React from "react";
import { useState } from "react";

const Button = () => {
  const [change, setChange] = useState(true);

  const handleColor = () => {
    setChange((current) => !current);
  };

  return (
    <div>
      <div>
        <button
          onClick={handleColor}
          style={{ backgroundColor: change ? "yellow" : "purple" }}
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Button;
