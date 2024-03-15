
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Upload() {
  const location = useLocation();
  const ytId = location.state ? location.state.ytId : null;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const callFun = async () => {
    try {
      const form = new FormData();
      form.append("ytId", ytId);
      console.log("Calling");
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/getCardDetail`, form)
        .then((response) => {
          console.log("response Data",response.data);
          console.log(response.data.result);
          setFormData({
            ...formData,
            title: response.data.result.ytVidName,
            description: response.data.result.ytVidDescription,
          });

        });
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    callFun();
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.name === "file" ? event.target.files[0] : event.target.value;
      setFormData({
        ...formData,
        [event.target.name]:inputValue
      })
  };

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(formData)
  const videoData = new FormData();
  videoData.append("videoFile",formData.file)
  videoData.append("title",formData.title)
  videoData.append("description",formData.description)
  axios.post(`${process.env.REACT_APP_BASE_URL}/upload`,videoData)
  .then((response)=>{
    console.log(response.data) 
  })
}

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center z-0 bg-slate-900">
    <div className="h-[450px] w-[400px] bg-gray-700 bg-transparent-50 text-white font-serif flex-col text-center rounded-xl z-50">
      <h2 className="text-center text-3xl mt-4 text-gray-300"><span className="text-orange-500">Upload</span> Youtube <span className="text-green-500">Video</span></h2>
      <div className="bg-black w-[300px] h-[2px] mx-auto mt-2 rounded-2xl" ></div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
            required
            className="m-5 w-[300px] border-b-2 border-orange-400 rounded-[10px] p-2 text-black bg-gray-200"
          />
        </div>
        <div >
          <textarea
            onChange={handleChange}
            value={formData.description}
            name="description"
            placeholder="description"
            required
            rows={5}
            className="m-4 w-[300px] text-[14px] border  border-orange-400 rounded-md p-2 text-black bg-gray-200"
          ></textarea>
        </div>
        <div>
          <input
            onChange={handleChange}
            accept="video/mp4"
            type="file"
            name="file"
            required
            className="mb-2 mt-1 w-[300px]  border-b-2 border-orange-400 rounded-md p-3 text-violet-600 bg-gray-200"
          />
        </div>
        <button type="submit" className="border border-black my-2 p-2 rounded-md bg-yellow-500 hover:bg-yellow-800 hover:text-black hover:border-white duration-300 transition-all ">Upload Video</button>
      </form>
    </div>
    </div>
  );
};

export default Upload;