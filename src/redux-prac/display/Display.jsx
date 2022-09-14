import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getaData, dataSort, filterData} from "../product-action/product_action"
import { Show } from './Show'
import "./dataDisplay.css"
import { Title } from '@mui/icons-material'

export const Display = () => {
  const [text, setText]= useState("")
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state)

    useEffect(()=>{
        // dispatch(getaData())
        getaData(dispatch)
    }, [dispatch])

    const handleSort =(e)=>{
        dispatch(dataSort(e.target.value))
    }

    const handleinp =(text)=>{
      setText(text)
    }

  return (
    <>
    <div>
       <input onChange={(e)=> handleinp(e.target.value)} style={{height:"2rem", width: "20%", color: "teal"}} type="text" placeholder='Enter here'/>
       {
        text && 
        <div className='input_div'>
          {
            products.filter(product =>product.title.toLowerCase().includes(text.toLowerCase())).map(product=>(
              <p>{product.title}</p>
            ))
          }
        </div>
       }
       </div>
    <div>
       
        <select onChange={handleSort}>
            <option value="">Sort by Price</option>
            <option value="asc">Low to High`</option>
            <option value="desc">High to Low</option>
        </select>
        <input type="radio" name="price" id="600"  onClick={(e) => dispatch(filterData(e.target.id))}/>
        &nbsp; Below $600
        <div className='cloth_container'>
          {
            products.map((prod)=>(
                <Show key={prod.id} {...prod}/>
            ))
          }
        </div>
    </div>
    </>
  )
}
