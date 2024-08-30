import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export const Infinte = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setIsloading] = useState(true);

  const getData = async () => {
    let res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=desc`
    );
    let data = await res.json();
    console.log(data);
    setData((pre) => [...pre, ...data.data]);
    setIsloading(false);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getData();
  //   }, 1000);
  // }, [page]);

  // const handleScroll = async () => {
  //   console.log(window.innerHeight);
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.scrollHeight);
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setIsloading(true);
  //       setPage((page) => page + 1);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(()=>{
    setTimeout(() => {
      getData()      
    }, 1000);
  },[page])


  const handleScroll = ()=>{
      console.log(window.innerHeight);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    if(window.innerHeight + document.documentElement.scrollTop + 1 >
       document.documentElement.scrollHeight){
        setIsloading(true);
        setPage(page + 1)
       }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])


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
