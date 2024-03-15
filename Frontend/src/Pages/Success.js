// Component/First.js
import React from "react";
import { useNavigate } from "react-router-dom";
const Success = () => {
    const navigation= useNavigate();
    const clickHandler=()=>{
        navigation("/dashboard");
    }
  return <div className="mt-[150px] flex flex-col justify-center items-center">
    <div className="text-[30px]">
        <span className="text-orange-600"> Successfully </span>
        <span> Video </span>
        <span className=" text-green-500"> Upload </span>
    </div>
    
    <button onClick={()=>{ navigation("/");}} className="mt-10 py-2 px-4 bg-yellow-500 text-black rounded-md">
        Back To Home
    </button>
    <button onClick={clickHandler} className="mt-10 py-2 px-4 bg-yellow-500 text-black rounded-md">
        Back To Dashboard
    </button>
  </div>;
};

export default Success;
