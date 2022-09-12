import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Display = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/data`)
      .then(({ data }) => {
        // console.log("get data succesfully", data);
        var x = data.filter((ele) => ele.id == id);
        setData(x);
        localStorage.setItem("scootyData",JSON.stringify(x));
      })
      .catch((e) => console.log(e));
  }, [id]);

  //   console.log(id,name);
  var sccotyArr=JSON.parse(localStorage.getItem("scootyData")) || []
  return (
   
    <div>
      <div className="container">
        {data.map((ele) => (
          <div className="inner_box" key={ele.id}>
            <h3>Name: {ele.name}</h3>
            <img style={{ width: "100%" }} src={ele.image} alt="" />
            <p>Capacity: {ele.capacity}</p>
            <p>Medicine Name: {ele.rentPerHour}</p>
            <button
              style={{
                width: "50%",
                backgroundColor: "#b5bfbf",
                borderRadius: "10px",
                height: "40px",
                color: "#fe0000",
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
