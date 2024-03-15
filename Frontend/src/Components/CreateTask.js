import React from "react";
import Loader from "../Components/Loader";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const fileInput = createRef();


const CreateTask = ({ setShowTask }) => {


  const token = localStorage.getItem("token");
  // console.log("Inside CreateTask",token);

  const navigate = useNavigate();
  const [loader ,setLoader] = useState(false);
  const [taskData, setTaskData] = useState({
    fileUrl: "",
    vidName: "",
    category: "Other",
    vidDesc: "",
  });
  
  const changeHandler = (event) => {
    event.preventDefault();
    if (event.target.type === "file") {
      handleFileUpload(event.target.files[0]);
      console.log("Video Here");
    } else {
      setTaskData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  function handleFileUpload(file) {
    if (file) {
      setTaskData((old) => ({
        ...old,
        fileUrl: file,
      }));
    }
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      console.log("TASK URL",taskData.fileUrl)
      const formData = new FormData();
      formData.append("ytfileUrl", taskData.fileUrl);
      formData.append("ytVidName", taskData.vidName);
      formData.append("ytCategory", taskData.category);
      formData.append("ytVidDescription", taskData.vidDesc);
      formData.append("token",token);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/videoUpload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("File Upload Success");
        setLoader(false);
        
      } else {
        console.error("File Upload Failure");
      }
    } catch (e) {
      console.error("Failure", e.message);
    }
    // toast.success("Task Created");
    navigate("/dashboard");
    setShowTask(false);
  };
  const backFromCreate=()=>{
    setShowTask(false);
  }

  return (
    <div>
    {
        loader ? (<Loader></Loader>):(<div className="text-black border border-white p-[20px] w-5/8">

          <div className="text-white">
           <button onClick={backFromCreate} className="text-3xl">
           <FaArrowLeft />
           </button>
          </div>
        <form onSubmit={submitHandler}>
          <div className="flex bg-red">
            <div className="flex flex-col gap-y-6">
              <div className="text-white">
                <label className="text-white" htmlFor="videoFile">
                  Upload video:{" "}
                </label>
                <input
                  className="mt-[7px] rounded-md p-[4px]"
                  required
                  type="file"
                  name="fileUrl"
                  id="fileUrl"
                  ref={fileInput}
                  // value={taskData.fileUrl}
                  onChange={changeHandler}
                ></input>
              </div>
              <div>
                <label className="text-white " htmlFor="videoName">
                  Video Name:{" "}
                </label>
                <br></br>
                <input
                  className="mt-[7px] rounded-md p-[6px]"
                  // required
                  type="text"
                  placeholder="Enter video name "
                  value={taskData.vidName}
                  onChange={changeHandler}
                  id="vidName"
                  name="vidName"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-[17px]">
                <label className="text-white " htmlFor="category">
                  Category:{"Other"}
                </label>
                <select
                  name="category"
                  value={taskData.category}
                  onChange={changeHandler}
                  id="category"
                  className="rounded-md p-[5px] ml-[6px]"
                >
                  <option value="Other">Other</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Food Vlogs">Food Vlogs</option>
                  <option value="Technology">Technology</option>
                  <option value="Education">Education</option>
                </select>
              </div>
              <div>
                <label className="text-white " htmlFor="vidDesc">
                  Description:
                </label>
                <br></br>
                <textarea
                  className="mt-[7px] rounded-md p-[6px]"
                  name="vidDesc"
                  id="vidDesc"
                  value={taskData.vidDesc}
                  rows="4"
                  cols="30"
                  onChange={changeHandler}
                  placeholder="Enter video Description here"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-black bg-white p-[4px] rounded-sm mt-[15px]"
            >
              Create
            </button>
          </div>
        </form>
      </div>)
    }
    
    </div>
  );
};

export default CreateTask;

