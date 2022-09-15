import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";

export const Infinte = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    //   const response = await
       axios.get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=desc`)
        .then((res)=>{
            setCoinsData((prevData) => {
                return [...prevData, ...res.data.data];
              });
        })
      setLoading(false);
    }, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll=() => {
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
      <h1>Product Gallery</h1>
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
      {loading && <p>....Loading</p>}
    </div>
  );
};
