import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Puppyname = () => {
    const [data, setData] = useState();
    const {name} = useParams();
  return (
    <div>Puppyname</div>
  )
}
