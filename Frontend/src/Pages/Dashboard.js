import React from "react";
import { useState } from "react";
import Cards from "../Components/Cards";
import { FaSquarePlus } from "react-icons/fa6";
import CreateTask from "../Components/CreateTask";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../Components/Editor";
import AssignedPage from "./AssignedPage";
import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../Components/Footer";


export const Dashboard = (props) => {
  const [dashPage, setDashPage] = useState("All");
  const [assignPage,setAssignPage]= useState(false)
  const [allPage, setAllPage] = useState(true);
  const setISLoggedIn = props.setISLoggedIn;
  const [category, setCategory] = useState("All");
  let [count, setCount] = useState(0);
  const [showTask, setShowTask] = useState(false);
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState({ allEditor: [] });
  useEffect(() => {}, []);

  useEffect(() => {
    const savedAccount = localStorage.getItem("accountType");
    if (savedAccount === "YouTuber") {
      setISLoggedIn(true);
      navigate("/dashboard");
    }
  }, []);

  const createHandler = () => {
    console.log("click to ");
    console.log(showTask);
    setShowTask(true);
    console.log(showTask);
    setCount(++count);
    navigate("/dashboard");
  };

  const callFun = async (req, res) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getEdAllDetail`,
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
      console.log(err);
    }
  };

  const setEditorPage = (event) => {
    console.log(event.target.value);
    setDashPage(event.target.value);
    event.target.value === "All" ? setAllPage(true) : setAllPage(false);
  };

  useEffect(() => {
    callFun();
  }, []);

  return (
    <div>
     <style>
      {`
        body {
          overflow-x: hidden;
        }
      `}
    </style>
      <div className="gap-x-16 flex flex-row justify-center mt-[50px] boarder-solid border-b border-gray-200 z-40 shadow-md shadow-red-300 py-5">
      {
              assignPage &&(<button
                onClick={()=>{setAssignPage(false)}}
                value="All"
                className="bg-white absolute rounded-full left-10 text-gray w-[30px] h-[30px] text-3xl text-black"
              >
                <FaArrowLeft />
              </button>)
            }
        <button
          onClick={setEditorPage}
          value="All"
          className="bg-white rounded-md text-black w-[50px] h-[30px]"
        >
          All
        </button>
        <button
          onClick={setEditorPage}
          value="Requested"
          className="bg-white rounded-md text-black px-4 h-[30px]"
        >
          Requested
        </button>
        <button
          onClick={setEditorPage}
          value="Assigned"
          className="bg-white p-[3px] rounded-md text-black text-md w-[100px] h-[30px]"
        >
          Assigned
        </button>
        <button
          onClick={setEditorPage}
          value="Done"
          className="bg-white p-[3px] rounded-md text-black text-md w-[80px] h-[30px]"
        >
          Done
        </button>
        <div className="flex gap-2">
          {" "}
          Create Task
          <button
            onClick={createHandler}
            className="text-3xl px-1 cursor-pointer"
          >
            <FaSquarePlus />
          </button>
        </div>
      </div>
      {
        !assignPage && (
          <div className=" text-white flex justify-center items-center h-[80vh] mt-[30px] w-full px-[20px]">
        <div className="w-10/12 h-full border-r-2 border-orange-500 rounded-[50px]">
          {
            <div className="flex justify-center items-center h-full  mt-[10px] w-full mx-auto px-5 ">
              {showTask ? (
                <CreateTask setShowTask={setShowTask}></CreateTask>
              ) : (
                <Cards dashPage={dashPage} setAssignPage={setAssignPage}></Cards>
              )}
            </div>
          }
        </div>
        {allPage && (
          <div className=" w-4/12 h-full overflow-y-scroll border-l-2 border-green-400 rounded-[50px] ml-3">
            <div className="  w-[85%] mx-auto flex-col mb-1 ">
              {fetchData?.allEditor.map((data, index) => {
                return <Editor data={data} key={index}></Editor>;
              })}
            </div>
          </div>
        )}
      </div>
        )
      }
      {assignPage && (
        <div className="h-full"><AssignedPage setAssignPage={setAssignPage}></AssignedPage></div>
          
        )}
        {
          allPage && <Footer className="footer"/>
        }
     
    </div>
  );
};
