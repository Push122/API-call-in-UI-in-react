import axios from "axios";
import { useState } from "react";

let Raj = () => {
  let [data, setdata] = useState();
  console.log(data);
  let My = async () => {
    let Ram = await axios.get(
      "https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=jabalpur"
    );
    setdata(Ram.data);
  };
  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center">
       
          <>
            <div className=" border-2">
              <div className="rounded-xl shadow-2xl shadow-black p-4">
                <div className=" rounded-xl shadow-2xl shadow-blue-600 p-4">
                  <div className=" flex justify-between">
                    <div className="ml-3 border-2 rounded-xl bg-red-200">
                      {
                        data &&   <p className=" font-bold">{data.current.temp_c}</p>
                    
                      }
                      {
                        data &&  <p className=" font-medium">{data.location.name}</p>
                   
                      }
                      {
                        data &&  <>
                         <p>{data.location.country}</p>
                      <img
                        className=" h-14 w-16"
                        src={data.current.condition.icon}
                        alt=""
                      />
                        </>
                      }
                       
                      <div className=" flex">
                        <p>
                          <input
                            className="  border-2 rounded-xl border-blue-300"
                            placeholder="Place"
                            type="text"
                          />
                        </p>
                        <p
                          onClick={My}
                          className=" overflow-hidden bg-slate-500 rounded-xl cursor-pointer"
                        >
                          Click me
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
     
      </div>
    </>
  );
};
export default Raj;
