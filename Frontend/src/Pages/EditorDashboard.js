import React from "react";
import { useState } from "react";
import EdCards from "../Components/EdCards";
import { FaSquarePlus } from "react-icons/fa6";
import CreateTask from "../Components/CreateTask";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../Components/Editor";
import AssignedPage from "./AssignedPage";
import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../Components/Footer";

export const EditorDashboard = (props) => {
  const setISLoggedIn = props.setISLoggedIn;
  const [allpage, setAllPage] = useState(true);
  const [edPage, setEdPage] = useState("All");
  let [count, setCount] = useState(0);
  const [showTask, setShowTask] = useState(false);
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState({ allYoutuber: [] });
  const [category, setCategory] = useState("All");
  const [assignPage, setAssignPage] = useState(false);

  useEffect(() => {
    console.log(showTask);
    console.log(count);
  }, []);

  useEffect(() => {
    const savedAccount = localStorage.getItem("accountType");
    if (savedAccount === "Editor") {
      setISLoggedIn(true);
      navigate("/EditorDashboard");
    }
  }, []);

  const createHandler = () => {
    setShowTask(true);
    setCount(++count);
    navigate("/EditorDashboard");
  };

  const changeHandler = (event) => {
    event.preventDefault();
    // setCategory(event.target.value);
    localStorage.setItem("category", event.target.value);
    setCategory(localStorage.getItem("category"));
  };

  const setEditorPage = (event) => {
    setEdPage(event.target.value);
    event.target.value === "All" ? setAllPage(true) : setAllPage(false);
  };

  const callFun = async (req, res) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getYtAllDetail`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setFetchData(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    callFun();
    setCategory(localStorage.getItem("category"));
  }, []);
  // console.log("EdPage",edPage)

  return (
    <div>
    <style>
      {`
        body {
          overflow-x: hidden;
        }
      `}
    </style>
      <div className=" gap-x-16 mt-[40px] boarder-solid border-b border-gray-200 shadow-md shadow-red-300 py-4">
        {!showTask && (
          <div className="gap-x-16 relative flex flex-row justify-center mt-[20px]">
            {
              assignPage &&(<button
                onClick={()=>{setAssignPage(false)}}
                value="All"
                className="bg-white absolute rounded-full left-10 text-gray w-[30px] h-[30px] text-3xl text-black "
              >
                <FaArrowLeft/>
              </button>)
            }
            
            <button
              onClick={setEditorPage}
              value="All"
              className="bg-white rounded-md text-black w-[50px] h-[30px] font-serif"
            >
              All
            </button>
            <button
              onClick={setEditorPage}
              value="Requested"
              className="bg-white rounded-md text-black px-4 h-[30px] font-serif"
            >
              Requested
            </button>
            <button
              onClick={setEditorPage}
              value="Assigned"
              className="bg-white p-[3px] rounded-md text-black text-md w-[100px] h-[30px] font-serif"
            >
              Assigned
            </button>
            <button
              onClick={setEditorPage}
              value="Done"
              className="bg-white p-[3px] rounded-md text-black text-md w-[80px] h-[30px] font-serif"
            >
              Done
            </button>
            <div className="mb-[17px]">
              <label className="text-white " htmlFor="category">
                Category:-{" "}
              </label>
              <select
                name="category"
                value={category}
                onChange={changeHandler}
                id="category"
                className="rounded-md p-[5px] ml-[6px]  hover:border-solid border bg-white text-black"
              >
                <option value="All">All</option>
                <option value="Gaming">Gaming</option>
                <option value="Food Vlogs">Food Vlogs</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
        )}
      </div>
      {
        !assignPage && ( <div className=" text-white flex justify-center items-center h-[80vh] mt-[20px] w-full ">
        <div className="border-r-2 border-orange-500 rounded-[80px] mr-6 w-10/12 h-full ">
          <div className="flex justify-center items-center h-full w-full mx-auto ">
            {count === 0 ? (
              <div className="flex justify-center items-center h-full w-full mx-auto px-5 ">
                <EdCards
                  category={category}
                  edPage={edPage}
                  setAssignPage={setAssignPage}
                ></EdCards>
              </div>
            ) : showTask ? (
              <CreateTask setShowTask={setShowTask}></CreateTask>
            ) : (
              <EdCards category={category}></EdCards>
            )}
          </div>
        </div>

        {  (
          <div className="border-l-2 border-green-400 rounded-[80px] w-4/12 h-full overflow-y-scroll ">
            <div className=" h-full w-[85%] mx-auto flex-col ">
              {fetchData?.allYoutuber.map((data, index) => {
                return <Editor data={data} key={index}></Editor>;
              })}
            </div>
          </div>
        )}
        
      </div>)
      }
      
      {assignPage && (
        <div className="h-full"><AssignedPage ></AssignedPage></div>
          
        )}
        {
          allpage && 
          <Footer/>
        }
        
    </div>
  );
};
