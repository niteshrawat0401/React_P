import React, { useEffect, useState } from 'react'

const Paginate = () => {
    const [countryData, setCountryData] = useState(countriesAndAnimals);
    const [newData, setNewData] = useState([]);
    const [page, setPage] = useState(3);
    const [presentPage, setPresentPage] = useState(1);
    const [pageChange, setPageChange] = useState([]);

    let totalPages =  Math.ceil(countryData.length / page); // 4
    const pageDivide = ()=>{
        let itemOfLastIndex = presentPage * page; // 3
        let itemOfFirstIndex = itemOfLastIndex - page; //0
        let dataitem = countryData.slice(itemOfFirstIndex,itemOfLastIndex)
        setNewData(dataitem)
        handleClick()
        // console.log(dataitem)
    }

    const handleClick = ()=>{
      let pageshow = []
      for(let i=1;i<=totalPages;i++){
        pageshow.push(i)
      }
      setPageChange(pageshow)
    }
    

    useEffect(()=>{
      pageDivide()
    },[presentPage])

    const handleInc = ()=>{
        setPresentPage(presentPage + 1);
    } 
    const handleDec = ()=>{
        setPresentPage(presentPage - 1);
    } 

    return (
    <div>
      {newData?.map((ele,i) => {
        return (
          <div key={i}>
            <div
              style={{
                border: "1px solid grey",
                borderRadius: "5px",
                width: "50%",
                margin: "auto",
                marginTop: "15px",
              }}
            >
              <p>Country: {ele?.country}</p>
              <p>NationalAnimal: {ele?.nationalAnimal}</p>
            </div>
          </div>
        );
      })}
      <div style={{marginTop: "20px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          {presentPage  > 1 && <button style={{cursor: "pointer"}} onClick={handleDec}>Prev</button>} 
          {pageChange?.map((ele,i)=>{
            return (
              <p key={i} onClick={()=>setPresentPage(ele)} style={{padding: "0 10px 0 10px", cursor: "pointer"}}>{ele}</p> 
            )
          })}
          {presentPage < totalPages && <button style={{cursor: "pointer"}} onClick={handleInc}>Next</button>}
        </div>
      </div>
    </div>
  );
}

export default Paginate


const countriesAndAnimals = [
    { country: "India", nationalAnimal: "Bengal Tiger" },
    { country: "United States", nationalAnimal: "Bald Eagle" },
    { country: "Australia", nationalAnimal: "Kangaroo" },
    { country: "China", nationalAnimal: "Giant Panda" },
    { country: "Canada", nationalAnimal: "Beaver" },
    { country: "Russia", nationalAnimal: "Brown Bear" },
    { country: "Japan", nationalAnimal: "Sika Deer" },
    { country: "Brazil", nationalAnimal: "Jaguar" },
    { country: "South Africa", nationalAnimal: "Lion" },
    { country: "Mexico", nationalAnimal: "Golden Eagle" }
  ];