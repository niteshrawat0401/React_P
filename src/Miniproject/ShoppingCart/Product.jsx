import React from 'react'
import { useContext } from 'react'
import { UseContext } from './ContextFile'
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const {cart, setCart, productData, updateQuan, setUpdateQuan} = useContext(UseContext);
    const navigate = useNavigate()

    const addToCart = (ele, i) => {
      let newarr = [];
      updateQuan.map((item, i) => {
        if (item) {
          return newarr.push(item?.name);
        }
      });

      if (newarr.includes(ele?.name)) {
        let addCart = updateQuan.map((item, index) => {
          if (item?.name === ele?.name) {
            let newQuan = item?.quantity + 1;
            return { ...item, quantity: newQuan, price: ele?.price * newQuan };
          }
          return item;
        });
        setUpdateQuan(addCart);
      } else {
        let tempCart = [...cart, ele];
        setCart(tempCart);
      }
    };
  return (
    <div>
        <div onClick={()=>navigate('/cart')} style={{ color: "blue", cursor: 'pointer' }}>Cart {cart?.length}</div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px' }}>
            {productData?.map((ele, i)=>{
                return (
                    <div key={i} style={{border: '1px solid grey', borderRadius: '5px'}}>
                            <p>{ele?.name}</p>
                            <p>{ele?.price}</p>
                            <button style={{cursor: 'pointer'}} onClick={()=>addToCart(ele,i)}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
        </div>
  )
}

export default Product