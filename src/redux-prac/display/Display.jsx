import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getaData, dataSort} from "../product-action/product_action"
import { Show } from './Show'

export const Display = () => {
  const [value, setValue]= useState("")
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state)

    useEffect(()=>{
        // dispatch(getaData())
        getaData(dispatch)
    }, [dispatch])

    const handleSort =(e)=>{
        dispatch(dataSort(e.target.value))
    }

    const handleinp =(value)=>{
        setValue(value)
    }

  return (
    <>
    <div>
       <input onInput={(e)=> handleinp(e.target.value)} style={{height:"2rem", width: "20%", color: "teal"}} type="text" placeholder='Enter here'/>
       </div>
    <div>
       
        <select onChange={handleSort}>
            <option value="asc">ltoh</option>
            <option value="desc">htol</option>
        </select>
        <div>
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
