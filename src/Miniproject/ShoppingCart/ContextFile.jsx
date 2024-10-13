import { useState, createContext, useEffect } from "react";

export const UseContext = createContext();

export const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productData, setProductData] = useState(products);
    const [updateQuan, setUpdateQuan] = useState([]);

  useEffect(()=>{
    setUpdateQuan(cart.map(item => ({name: item?.name, quantity: 1, price: item.price })));
  },[cart])

//   increment quantity
  const handleIncQuantity = (ele,i)=>{
    let newUpdateQuan = updateQuan.map((item,index)=> {
        if(index === i){
            const newQuantity = item.quantity + 1;
           return { ...item,quantity: newQuantity,price:  ele?.price * newQuantity}
        }
        return item
    })
    setUpdateQuan(newUpdateQuan)
}

//   decrement quantity
  const handleDecQuantity = (ele,i)=>{
    const newUpdateQuan = updateQuan.map((item, index)=>{
        if(index === i){
            const newQuantity = item?.quantity - 1;
            return {...item, quantity: newQuantity, price: ele?.price * newQuantity}
        }
         return item
    })
    setUpdateQuan(newUpdateQuan)
  }

//   delete function
  const handleDelete = (ele, i) => {
    let deleteItem = cart.filter((item, index) => {
      return index !== i && item;
    });
    setCart(deleteItem);
  };

  return (
    <UseContext.Provider value={{ 
        cart, setCart, 
        productData, 
        updateQuan, setUpdateQuan,
        handleIncQuantity, handleDecQuantity, handleDelete
        }}>
      {children}
    </UseContext.Provider>
  );
};

const products = [
  { name: "iPhone 15 Pro Max", price: 2 },
  { name: "Samsung Galaxy S24 Ultra", price: 3 },
  { name: "Google Pixel 8 Pro", price: 89999 },
  { name: "OnePlus 12 Pro", price: 69999 },
  { name: "Xiaomi 14 Pro", price: 59999 },
  { name: "OPPO Find X7 Pro", price: 54999 },
  { name: "Vivo X100 Pro", price: 49999 },
  { name: "Realme GT5 Pro", price: 44999 },
  { name: "Motorola Edge 40 Pro", price: 39999 },
  { name: "Nothing Phone 2", price: 34999 },
];
