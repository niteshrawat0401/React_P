import React from 'react'
import { useContext } from 'react'
import { UseContext } from './ContextFile'

const Product = () => {
    const {cart, productData} = useContext(UseContext);
    console.log(productData)
  return (
    <div>Product</div>
  )
}

export default Product