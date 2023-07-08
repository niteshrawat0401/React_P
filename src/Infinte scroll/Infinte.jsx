import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export const Infinte = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setIsloading] = useState(true);

  const getData = async () => {
   
    const res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=5&orderBy=desc`
    );
    const data = await res.json();
    console.log(data.data);
    setData((preData) => [...preData, ...data.data]);
    setIsloading(false);
  };

  useEffect(() => {
    setTimeout(()=>{
      getData();
    },1000)
  }, [page]);

  const handleScroll = async() => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsloading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {data?.length > 0 ? (
        data?.map((ele, index) => {
          return (
            <div key={index}>
              <img src={ele.image} alt="" />
              <p>{ele.brand}</p>
              <p>{ele.category}</p>
            </div>
          );
        })
      ) : (
        <h2>NOt data</h2>
      )}
      {loading && <h1>Loading....</h1>}
    </div>
  );
};
