import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styles from './landing.module.css'

export const Landing = () => {
const [result , setData]=useState([])
const [pageNo , setPageNo] = useState(2)
    
    useEffect(() => {
        let res = axios
          .get(`https://api.coincap.io/v2/assets`)
          .then((res) => {
            // console.log("get data succesfully", res.data);
            setData((res.data.data));
          })
          .catch((e) => console.log(e));
      }, []);
      
      
        var sum =0;
        var Volume = 0;
        var percents = 0
            {result.map((elem) => {
               sum +=Number(elem.marketCapUsd)
               Volume += Number(elem.volumeUsd24Hr)
               percents += Number(elem.changePercent24Hr)
            })}

        var Market_cap = sum/1000000000000 ;
        var Volumeadd = Volume/1000000000;
        var changePercent = (percents*100)/100

        console.log(sum)
    


    

  return (
<>
  <div>
        <div>
            <h1>MARKET CAP</h1>
            <h1>{Market_cap.toFixed(2)}</h1>
        </div>

        <div>
            <h1>EXCHANGE VOL</h1>
            <h1>{Volumeadd.toFixed(2)}</h1>
        </div>
        <div>
            <h1></h1>
            <h1>{changePercent.toFixed(2)}</h1>
        </div>

  </div>
  <div>
  <button onClick={()=>{if(pageNo>1){{setPageNo(pageNo-1)}}}}>Previous</button>
  <button onClick={()=>setPageNo(pageNo+1)}>Next</button>
  </div>
    <div className={styles.table_main_div}>
        <table border="1">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market cap</th>
                    <th>VWAP (24Hr)</th>
                    <th>Supply</th>
                    <th>Volume (24Hr)</th>
                    <th>Change (24Hr)</th>
                </tr>
            </thead>
            <tbody>
               {result.map((elem)=>
                   <tr key = {elem.id}>
                     <td>
                        {elem.rank}
                     </td>
                      <td>
                        <div className={styles.map_logo}>
                            <div>
                                <img src={`https://assets.coincap.io/assets/icons/${elem.symbol.toLowerCase()}@2x.png`} alt="" />
                            </div>
                            <div>
                                <p>{elem.name}</p>
                                <p>{elem.symbol}</p>
                            </div>
                        </div>
                      </td>
                      <td>
                        ${Number(elem.priceUsd).toFixed(2)}
                      </td>
                      <td>
                        {(Number(elem.marketCapUsd)/1000000000).toFixed(2)}b
                      </td>
                      <td>
                        {Number(elem.vwap24Hr).toFixed(2)}
                      </td>
                      <td>
                        {(Number(elem.supply)/1000000).toFixed(2)}m
                      </td>
                      <td>
                        {(Number(elem.volumeUsd24Hr)/1000000000).toFixed(2)}b
                      </td>
                      <td>
                        {((Number(elem.changePercent24Hr)*100)/100).toFixed(2)}%
                      </td>
                   </tr>

                
               )}

            </tbody>
        </table>
    </div>
  </>
  )
}