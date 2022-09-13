import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Puppy.css";

export const Puppy = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        let puppise = res.data.message;
        // console.log(puppise);
        setItems(puppise);
      })
      .catch((e) => console.log(e));
  }, []);
  const puppyData = Object.keys(items);
  const dataArr = puppyData;
  // console.log(dataArr);
  return (
    <div className="main_contaner">
      {dataArr.map((ele, index) => (
        <div className="inner_continer" key={index}>
          <Link to={`/puppy/${ele}`}>{ele}</Link>
        </div>
      ))}
    </div>
  );
};