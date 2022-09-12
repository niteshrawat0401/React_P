import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Puppyname = () => {
    const [data, setData] = useState([]);
    const {name} = useParams();

    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breeds/list/all`)
        .then((res)=>{
            let puppised= res.data.message
             console.log(puppised);
            var x= puppised.filter((ele)=> ele==name);
            setData(x)
        })
        .catch((e)=>console.log(e))
    },[])
    // const puppiesData= Object.keys(data)
    // const puppiesArr= puppiesData
    // console.log(puppiesArr); 
  return (
    <div>
        {/* {
            puppiesArr.map((ele)=>(
                <div>
                    {ele}
                </div>
            ))
        } */}
    </div>
  )
}
