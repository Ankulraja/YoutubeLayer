import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import youtube from "../images/youtube.png"

export const Signup = ({ setISLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [accountType, setAccountType] = useState("YouTuber"); 

  
  function changeHandler(event) {
    setFormdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    const acodata = {
      ...formData,
    };
    const finaldata = {
      ...acodata,
      accountType,
    };
    createEmployee(finaldata);
  }
  
  
  //   Connect to Backend
  const createEmployee = async (finaldata) => {
    await fetch(
      `${process.env.REACT_APP_BASE_URL}/signup`,
      
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...finaldata }),
      }
      )
      .then((res)=>{
        return res.json();
      })
      .then((result) => {
        console.log(result.message);
        console.log(result);
        if(result.success){
          toast.success(result.message);
          setISLoggedIn(true);
          console.log("Inside Signup",result);
          console.log(result.existUser.accountType);
          localStorage.setItem("accountType", result.existUser.accountType);
          localStorage.setItem("token",result.token);
          localStorage.setItem("image",result.existUser.image);
          localStorage.setItem("category","All");
          localStorage.setItem("email",result.existUser.email);


          result.existUser.accountType==="YouTuber" ? navigate("/dashboard"): navigate("/editorDashboard");
        }
        else{
          toast.error(result.message);
        }
      })
      .catch((err) => {console.log("error are",err)});   
    };
    
    return (
      <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 mt-[100px]">

      <div className="w-11/12 max-w-[450px]">
        <div
          className="flex rounded-full bg-gray-800 p-1
          gap-x-1 my-6 max-w-max "
          >
          <button
            className={`${
              accountType === "YouTuber"
              ? "bg-gray-950 text-white"
              : "bg-transparent text-gray-200"
            }
            py-2 px-5 rounded-full transitiion-all duration-100`}
            onClick={() => {
              setAccountType("YouTuber");
            }}
            >
            YouTuber
          </button>

          <button
            className={`${
              accountType === "Editor"
              ? "bg-gray-900 text-gray-50 "
              : "bg-transparent text-gray-200"
            } 
            py-2 px-5 rounded-full transitiion-all duration-200`}
            onClick={() => {
              setAccountType("Editor");
            }}
            >
            Editor
          </button>
        </div>
        <form onSubmit={submitHandler} className="w-[450px]">
          <div className="flex justify-between gap-2 ">
            <label className="w-full flex flex-col items-start relative mt-1">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                First Name<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstName}
                className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                />
            </label>

            <label className="w-full flex flex-col items-start relative mt-1">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                Last Name<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastName}
                className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                />
            </label>
          </div>
          {/* email  */}
          <label className=" flex flex-col items-start relative mt-2">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
              Email Address<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
            />
          </label>
          {/* create password  */}
          <div className=" flex justify-between gap-2">
            <label className="w-full flex flex-col items-start relative mt-2">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                Create Password<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
              />
              <span
                className="absolute right-3 top-[30px] cursor-pointer mt-1"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>

            <label className="w-full flex flex-col items-start relative mt-2">
              <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                Confirm Password<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type={showPassword1 ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
              />

              <span
                className="absolute right-3 top-[30px] cursor-pointer mt-1"
                onClick={() => setShowPassword1((prev) => !prev)}
              >
                {showPassword1 ? (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>

          <button className="bg-yellow-500 mt-5 w-full rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950  hover:text-white duration-200">
            Create Account
          </button>
          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-gray-700"></div>
            <p className="text-gray-700 font-medium leading-[1.375rem]">OR</p>
            <div className="w-full h-[1px] bg-gray-700"></div>
          </div>
          <button
            className=" w-full flex justify-center items-center 
            rounded-[8px] font-medium text-gray-100 border
             border-gray-700 px-[12px] py-[8px] gap-x-2 mt-4 hover:bg-gray-900 transition-all duration-100 "
          >
            <FcGoogle />
            <p>Sign Up with Google</p>
          </button>
        </form>
      </div>
      <div className=" flex justify-end mt-[100px] animate-pulse transition-all ease-in-out w-[500px] h-[300px]">
        <img src={youtube} alt="youtube"></img>
      </div>
    </div>

  );
};