import React, { useContext, useState } from "react";
import { UseContext } from "./ContextFile";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    setCart,
    updateQuan,
    setUpdateQuan,
    handleIncQuantity,
    handleDecQuantity,
    handleDelete,
  } = useContext(UseContext);
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ margin: "auto", width: "40%" }}>
        {cart?.length > 0 ? (
          cart?.map((ele, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "40px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p>{ele?.name}</p>
                  <p style={{ paddingLeft: "10px" }}>{ele?.price}</p>
                </div>

                <div
                  div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    disabled={updateQuan[i].quantity === 1}
                    onClick={() => handleDecQuantity(ele, i)}
                  >
                    -
                  </button>
                  <p>{updateQuan[i]?.quantity}</p>
                  <button onClick={() => handleIncQuantity(ele, i)}>+</button>
                  <p>{updateQuan[i]?.price}</p>
                  <button onClick={() => handleDelete(ele, i)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h3>No Data in Cart</h3>
            <p style={{ color: "blue", cursor: 'pointer' }} onClick={() => navigate("/product")}>
              Go to Product
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
