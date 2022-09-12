import axios from "axios"
import { GET_ALL_DATA, ERR_DATA,REQ_GET_DATA, SORT_DATA, FILTER_DATA} from "../actionType"

export const getaData =(dispatch)=>{
    dispatch(req_data());
    axios.get("https://movie-fake-server.herokuapp.com/products")
    .then((res)=>
     dispatch({
        type: GET_ALL_DATA,
        payload: res.data
    })
    )
    .catch((err)=> dispatch(err_data(err.message)));
}

export const req_data= ()=>({
    type: REQ_GET_DATA,
})
export const err_data =(err)=>({
    type:ERR_DATA,
    payload:err
})

export const dataSort =(payload)=>({
    type: SORT_DATA,
    payload
})

export const filterData =(payload)=>({
    type:FILTER_DATA,
    payload
})