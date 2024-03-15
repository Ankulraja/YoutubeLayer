import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import Upload from "../Pages/Upload";
import { useNavigate } from "react-router-dom";
const EditedCard = (props) => {
  const [vidStatus, setVidStatus] = useState("Pending...");
  const data = props.value;
  const ytId = props.id;
  const refersh = props.refersh;
  const setRefersh = props.setRefersh;
  const accountType = localStorage.getItem("accountType");
  const navigate = useNavigate();

  const deleteHandler = async () => {
    const formData = new FormData();
    try {
      formData.append("content", data);
      formData.append("ytId", ytId);

      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/deleteEditodVideo`, formData)
        .then((result) => {
          if (result.data.success) {
            setRefersh(!refersh);
          }
        });
    } catch (e) {
      console.log("Error in deleting video", e);
    }
  };

  const handleApproval = (status) => {
    navigate("/Upload",{ state: { ytId,data} });
  };

  return (
    <div className="w-[30%] h-[75%] mx-auto border border-yellow-500 my-auto">
      <div className="h-[75%] w-full border border-green-600">
        <video className="h-full w-full" controls src={data}></video>
      </div>
      <div className="w-full h-[25%] border border-red-500 relative mr-4 ">
        {accountType === "Editor" ? (
          <div className="w-full h-full flex justify-evenly items-center">
            <h2 className="py-1 px-3 bg-yellow-500 rounded-sm text-black">
              {vidStatus}
            </h2>
            <button
              className="text-3xl cursor-pointer "
              onClick={deleteHandler}
            >
              <MdDelete></MdDelete>
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex justify-evenly items-center">
            <button
              onClick={handleApproval}
              className="bg-yellow-500 py-1 px-3 rounded-sm text-black"
            >
              Upload
            </button>
            <button
              onClick={deleteHandler}
              className="bg-yellow-500 py-1 px-3 rounded-sm text-black"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditedCard;
