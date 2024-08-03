import React from 'react'
import { useFetch } from './useFetch'

const LimitedData = () => {
    const [loading, limitedData] = useFetch('products?limit=5')
    console.log("limitedData", limitedData, loading)
  return (
    <div>LimitedData</div>
  )
}

export default LimitedData;