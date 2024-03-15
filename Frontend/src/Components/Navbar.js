import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../images/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { PopUp } from "./PopUp";

export const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setISLoggedIn = props.setISLoggedIn;
  const image = localStorage.getItem("image");
  const savedAccount = localStorage.getItem("accountType");
  let YouTuber = false;
  let editor = false;
  savedAccount === "YouTuber" ? (YouTuber = true) : (editor = true);
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  return (
    <div className=" overflow-hidden bg-black fixed right-0 left-0 top-0 boarder-solid border-b border-grey-200 z-40 shadow-md shadow-red-300">
      <div className="flex  justify-between items-center w-11/12 max-w-[1160px] mx-auto ">
        <div className="  ">
          <NavLink to="/">
            <img className="h-14 w-40 " src={logo} alt="logo" loading="lazy" />
          </NavLink>
        </div>
        <div>
          <div className="flex ">
            <ul className="flex gap-6 flex-row  mx-[10px]">
              <li>
                <NavLink
                  to="/"
                  className=" text-white p-[4px] px-[10px] rounded-[8px] focus:bg-white focus:text-black hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className=" text-white p-[4px] px-[12px] rounded-[8px] focus:bg-white focus:text-black mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100"
                >
                  About
                </NavLink>
              </li>
            </ul>
            {!isLoggedIn && (
              <NavLink to="/login">
                <button className=" text-white px-[12px] py-[1.5px] focus:bg-white focus:text-black rounded-[8px] mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100">
                  Login
                </button>
              </NavLink>
            )}
            {isLoggedIn && YouTuber && (
              <NavLink to="/dashboard">
                <button className="text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100">
                  Dashboard
                </button>
              </NavLink>
            )}
            {isLoggedIn && editor && (
              <NavLink to="/editorDashboard">
                <button className="text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100">
                  Editor Dashboard
                </button>
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/">
                <button
                  onClick={() => {
                    setISLoggedIn(false);
                    toast.success("Logged Out");
                    localStorage.removeItem("accountType");
                    localStorage.removeItem("token");
                    localStorage.removeItem("image");
                    localStorage.removeItem("category");
                    localStorage.removeItem("dashPage");
                    localStorage.removeItem("edPage");
                    localStorage.removeItem("email");
                  }}
                  className="text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100"
                >
                  Log out
                </button>
              </NavLink>
            )}
            {isLoggedIn && (
              <button
                onClick={() => {
                  setIsPopUpShow(true);
                  console.log("hello");
                }}
              >
                <img className="w-8 rounded-[50%]" src={image} alt="Profile" />
              </button>
            )}
            {isPopUpShow && <PopUp onClose={() => setIsPopUpShow(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
};
