import { useState, createContext } from "react";

export const UseContext = createContext();

export const Context = ({ children }) => {
  const [cart, setCart] = useState(4);
  const [productData, setProductData] = useState(products);

  return (
    <UseContext.Provider value={{ cart, setCart, productData }}>
      {children}
    </UseContext.Provider>
  );
};

const products = [
  { name: "iPhone 15 Pro Max", price: 129999 },
  { name: "Samsung Galaxy S24 Ultra", price: 109999 },
  { name: "Google Pixel 8 Pro", price: 89999 },
  { name: "OnePlus 12 Pro", price: 69999 },
  { name: "Xiaomi 14 Pro", price: 59999 },
  { name: "OPPO Find X7 Pro", price: 54999 },
  { name: "Vivo X100 Pro", price: 49999 },
  { name: "Realme GT5 Pro", price: 44999 },
  { name: "Motorola Edge 40 Pro", price: 39999 },
  { name: "Nothing Phone 2", price: 34999 },
];
