import { useContext, useEffect, useId, useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";
import { createRef } from "react";
import { useID } from "../context/AllSchemaId";
import EditedCard from "../Components/EditedCard";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
const AssignedPage = () => {
  const navigate = useNavigate();
  const { ytSchemaId } = useID();
  const fileInput = createRef();
  const [createTab, setCreateTab] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [editedVideoData, setEditedVideoData] = useState([]);
  const [editedVideoDataLength, setEditedVideoDataLength] = useState(false);
  const [refersh, setRefersh] = useState(false);
  const [taskData, setTaskData] = useState({
    fileUrl: "",
  });
  const accountType = localStorage.getItem("accountType");

  const callFun = async () => {
    try {
      const formData = new FormData();
      formData.append("ytId", ytSchemaId);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getCardDetail`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      // console.log("Result", result);
      setVideoUrl(result.result.ytfileUrl);
      setTitle(result.result.ytVidName);
      setCategory(result.result.ytCategory);
      setDiscription(result.result.ytVidDescription);
      setEditedVideoData(result.result.editedVideoList || []);

      // console.log("result to result", typeof(result.result.editedVideoList.length));
      result.result.editedVideoList.length === 0
        ? setEditedVideoDataLength(true)
        : setEditedVideoDataLength(false);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (event) => {
    event.preventDefault();
    if (event.target.type === "file") {
      handleFileUpload(event.target.files[0]);
      // console.log("Video Here");
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
  const formSubmitHandler = async (event) => {
    setLoader(true);
    // console.log(loader);
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("ytId", ytSchemaId);
      formData.append("editedVideoUrl", taskData.fileUrl);

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/updateEditodVideo`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const result = await response.json();
        // console.log("response", result);
        setLoader(false);
      } else {
        console.log("Error Found");
      }
    } catch (e) {
      console.log(e);
    }
    setCreateTab(false);
  };

  useEffect(() => {
    callFun();
  }, [createTab, loader, refersh]);
  return (
    <div className="w-screen h-screen flex mt-[50px] ">
      {!createTab && (
        <div className="w-3/4  h-full ">
          <div className="w-full flex  px-16 border-b-2 border-orange-500 rounded-[100px]">
            <div className="flex bg-gray-500 w-1/3 mb-4 ">
              <video controls src={videoUrl}></video>
            </div>

            <div className="w-2/3  px-5 flex flex-col justify-center gap-1 overflow-hidden font-serif">
              <div className="text-xl text-orange-400">
                TITLE:
                <span className="text-gray-400 text-sm"> {title}</span>
              </div>
              <h1 className="text-xl text-white-400">
                CATEGORY:{" "}
                <span className="text-gray-400 text-sm">{category}</span>
              </h1>
              <h1 className="text-xl text-green-400">
                DESCRIPTION:
                <span className="text-gray-400 text-sm">{discription}</span>
              </h1>
            </div>
          </div>
          {accountType === "YouTuber" ? (
            <div className="my-4 w-full">
              <div className="text-center text-gray-300 text-[18px]">
                For Uploading the Video In Youtube You need to first download
                the Edited Video then Click on{" "}
                <button
                  onClick={() => {
                    navigate("/Upload", { state: {"ytId": ytSchemaId } });
                  }}
                  className="underline text-blue-500 hover:text-blue-700"
                >
                  Upload on Youtube
                </button>{" "}
                .
              </div>
            </div>
          ) : (
            <div className="w-full h-16 flex justify-center items-center">
              <div className="flex gap-2 font-serif ">
                Upload Edited Video -
                <button
                  className="text-3xl px-1 cursor-pointer"
                  onClick={() => {
                    setCreateTab(true);
                  }}
                >
                  <FaSquarePlus />
                </button>
              </div>
            </div>
          )}

          <div className="w-full  h-full  border-t-2 border-green-500 rounded-[80px] pt-5">
            <div className="w-[97%] h-80  pt-5 mx-auto flex flex-wrap gap-4 ">
              {editedVideoDataLength && (
                <div className="text-center mx-auto my-auto text-2xl font-mono">
                  No Edited Video Yet...
                </div>
              )}
              {editedVideoData.map((value, index) => {
                return (
                  <EditedCard
                    key={index}
                    id={ytSchemaId}
                    value={value}
                    refersh={refersh}
                    setRefersh={setRefersh}
                  ></EditedCard>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {!createTab && (
        <div className="w-1/4 ml-1 border-x-2 mr-5 rounded-[100px] border-orange-400  flex flex-col justify-center items-center font-serif">
          CHAT BOX
          <h2 className="m-3">Comming Soon...</h2>
        </div>
      )}

      {createTab && !loader && (
        <div className="w-full flex justify-center items-center">
          <div className="border border-dashed py-2 px-2 border-red-500 text-xl">
            <button
              className="mb-10 text-3xl"
              onClick={() => {
                setCreateTab(false);
              }}
            >
              <FaArrowCircleLeft />
            </button>
            <form
              onSubmit={formSubmitHandler}
              className="flex flex-col items-center gap-5"
            >
              <label className="text-underline underline decoration-dotted">
                Upload Edited Video
              </label>
              <input
                className="mt-[7px] rounded-md p-[4px]"
                required
                type="file"
                name="fileUrl"
                id="fileUrl"
                ref={fileInput}
                onChange={changeHandler}
              ></input>
              <button
                className=" bg-green-200 text-black py-2 px-4 font-bold border border-blue-500"
                type="submit "
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}

      {loader && createTab && <Loader></Loader>}
    </div>
  );
};
export default AssignedPage;
