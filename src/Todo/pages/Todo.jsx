import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Todo = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [productName, setproductName] = useState("");
  const [descripTion, setdescripTion] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/data", {
        image,
        productName,
        descripTion,
        price,
      })
      .then((res) => console.log("data post succesfully", res))
      .catch((e) => console.log(e));
    setImage("");
    setproductName("");
    setdescripTion("");
    setPrice("");
  };

  useEffect(() => {
    let res = axios
      .get("http://localhost:8000/data")
      .then((res) => {
        console.log("get data succesfully", res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  function deletePost(id) {
    axios
      .delete(`http://localhost:8000/data/${id}`)
      .then((res) => console.log("delted", res))
      .catch((err) => console.log(err));
    window.location.reload();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={image}
          placeholder="Enter image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          value={productName}
          placeholder="Product Name"
          onChange={(e) => setproductName(e.target.value)}
        />
        <input
          type="text"
          value={descripTion}
          placeholder="Description"
          onChange={(e) => setdescripTion(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input type="submit" value="Add Data" />
      </form>

      <div>
        {data.map((ele) => (
          <div key={ele.id}>
            <img src={ele.image} />
            <div>{ele.productName}</div>
            <div>{ele.descripTion}</div>
            <div>{ele.price}</div>
            <button onClick={() => deletePost(ele.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
