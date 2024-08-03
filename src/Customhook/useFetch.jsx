import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useFetch = (data) => {
    console.log(data)
    const [count, setCount] = useState([]);
    const [loading, setLoading] = useState(false)

    const getDataFuntion =()=>{
        axios.get(`https://fakestoreapi.com/${data}`)
        .then((res)=>{
            // console.log(res.data);
            setCount(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getDataFuntion()
    },[])
    return [loading, count];
}
