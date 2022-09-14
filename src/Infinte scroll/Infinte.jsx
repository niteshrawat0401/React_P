import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PAGE_NUMBER = 1;

export const Infinte = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=desc`
      );

      setCoinsData((prev) => {
        return [...prev, ...response.data.data];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      {/* <CryptoList coinsData={coinsData} /> */}
      <div className="crypto_list">
        {coinsData.map((ele) => {
          return (
            // <CryptoCard
            <div key={ele.id}>
              <p>{ele.brand}</p>
              <img style={{ height: "10rem" }} src={ele.image} alt="" />
              <p> {ele.title}</p>
              <p>{ele.category}</p>
              <p>{ele.price}</p>
            </div>

            // />
          );
        })}
      </div>
      {loading && <p>....loading</p>}
    </div>
  );
};
