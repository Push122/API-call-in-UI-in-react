import axios from "axios"
import { useState } from "react"

let Push=()=>{
   const [data,setdata]=useState()
    console.log(data);
    let Ram=async()=>{
        let Site=await axios.get("https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=Jabalpur")
        setdata(Site.data)
       
        
    }
    return(
        <>

    {/* <div  className="  items-center justify-items-center mt-72 ml-32">
       <div className=" bg-slate-100 h-60 w-96 text-center "> 
        <div className=" text-start" >
            <div className=" flex">
       <input className=" mt-4 ml-3 w-30 bg-gray-300" placeholder="Place" type="text" name="" id="" />
       <img className=" h-16 w-20 mt-2 ml-20" src="" alt="" />
       
       </div>
      <input className="ml-2 mt-5 border bg-blue-300 h-12" placeholder="Temp" type="text" />
        </div>
        <input className=" mt-8 h-11  rounded-xl bg-red-300" placeholder="Input" type="text" />
        <button onClick={Ram} className=" rounded-xl h-12 w-12 bg-lime-400">Click</button>

         </div>
       
    
       </div>
     */}

     <div className=" h-screen w-screen flex justify-center items-center">
    <div className="  rounded-xl border shadow-black shadow-2xl p-4">

      <div className=" flex justify-between items-center  ">
        <div> 
            {
                data && <>
                  <p className=" font-medium text-4xl text-zinc-700">{data.current.temp_c}`C</p>
            <p className=" text-2xl text-slate-700 font-medium font-serif " >{data.location.name}</p>
            <p className=" text-xs">{data.location.region}</p>
            <p className=" text-xs" >{data.location.country}</p>
                </>
            }
          

           
        </div>
        <div className=" flex flex-col items-center">
            {data && <>
            <img  className="  h-12 w-12" src={data.current.condition.icon} alt="" />
              <p className=" text-xs">{data.current.condition.text}</p>
            </>}
              
        </div>
      
      </div>
<div className=" mt-20 overflow-hidden border-2 border-gray-500  rounded-full flex justify-between items-center "><input className="  p-2" type="text" /><p onClick={Ram} className=" p-2  bg-neutral-800  cursor-pointer text-slate-50 font-medium">Click</p></div>
    </div>
     </div>
        </>
    )
}
export default Push