import React, { useState,useEffect } from "react";
import { FaKey } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
export const PopUp = ({ onClose }) => {
    const [popUpData, setPopUpData]=useState({
        youTuberKey:"",
        Gender:"",
        dateOfBirth:"",
        mobNo:"",
    });
    function changeHandler(event){
      setPopUpData((prevData) =>({
        ...prevData,
        [event.target.name]:event.target.value,
      }));
    }

    function submitHandler(event) {
      event.preventDefault();
      const popData = {
        ...popUpData,
      };
      console.log(popData);
    }
     useEffect(() => {
    return () => {
      // Log the data when the component is unmounted (onClose)
      console.log(popUpData);
    };
  }, [popUpData]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center">
    <form onSubmit={submitHandler} className="w-11/12 max-w-[450px] h-[300px] bg-gray-800 opacity-100 p-6 rounded-md relative transform scale-100 ">
    <div className="w-10">
      <RxCross2 
      onClick={onClose}
      className="absolute w-10 h-10 right-1 top-1  rounded  hover:bg-gray-900 transition-all duration-200 "/>
    </div>
    
      <label className="flex gap-0.5 ">
      <FaKey className="h-12 w-5 left-0 top-5 text-black m-0.5" />
        <input
        required
        type="text"
        name="youTuberKey"
        onChange={changeHandler}
        placeholder="Enter your Key"
        value={popUpData.youTuberKey}
        className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-12 border-b-2 border-b-blue-200"
        />
        </label>
       <label className="flex gap-0.5">
       <IoPerson className="h-12 w-5 left-0 top-5 text-black m-0.5" />
        <select
          required
          name="Gender"
          onChange={changeHandler}
          placeholder="Select Gender"
          value={popUpData.Gender}
          className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-12 border-b-2 border-b-blue-200"
        > 
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select>
       </label>

        <label className="flex gap-0.5">
        <MdDateRange className="h-12 w-5 left-0 top-5 text-black m-0.5"/>
        <input
          required
          type="date"
          name="dateOfBirth"
          onChange={changeHandler}
          placeholder="Select your date of birth"
          value={popUpData.dateOfBirth}
          className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-12 border-b-2 border-b-blue-200"
        />
        </label>

        <label className="flex gap-0.5">
        <FaPhoneAlt className="h-12 w-5 left-0 top-5 text-black m-0.5"/>
          <input
           type="tel"
           name="mobNo"
           onChange={changeHandler}
           placeholder="Mobile Number"
           value={popUpData.mobNo}
           className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-12 border-b-2 border-b-blue-200"
          />
        </label>

       <button onClick={onClose} type="submit" className="absolute text-black right-2 bottom-2 rounded bg-white p-1.5 hover:bg-slate-900 transition-all  duration-150 ease-out hover:ease-in  ">
          Create
        </button>
    
    </form>
    </div>
  );
};
