import axios from "axios"
import { useState } from "react"

let My=()=>{
//    let [data,setdata]=useState()
//     let [place,setplace]=useState()

    let Nitish=async()=>{
        const data=await axios.post("https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=London")
        console.log(data);
        
        
    }
    return(
        <>
        <span>
      <p  className=" rounded-xl cursor-move bg-slate-500 w-36 h-28  text-center text-white hover:bg-green-200 hover:text-black select-none"> Click me</p> 
      <p onClick={Nitish} className=" -mt-16 ml-6 rounded-xl bg-blue-500 cursor-pointer w-20 select-none">Click Here</p>
      <p className=" rounded-xl bg-red-500 mt-3 ml-6 cursor-pointer w-20">Click here</p>
       </span>
        </>
    )
}
export default  My