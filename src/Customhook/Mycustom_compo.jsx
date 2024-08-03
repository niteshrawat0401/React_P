import React, { useEffect } from 'react'
import { useFetch } from './useFetch'

export const Mycustom_compo = () => {
    const count = useFetch('products');
    console.log('count', count)

  return (
    <div>{count}</div>
  )
}
