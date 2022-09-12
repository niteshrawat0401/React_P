import React from 'react'

export const Show = ({ title, id, brand, image, price, category}) => {
  return (
    <div>
        <div>
            <img src={image} alt="" />
            <p>{price}</p>
            <p>{title}</p>
        </div>
    </div>
  )
}
