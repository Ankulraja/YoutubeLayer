import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const RequestedCard = (props) => {
  const assignRefersh = props.assignRefersh;
  const setAssignRefersh = props.setAssignRefersh;
  const email = props.data;
  const cardId= props.cardId;
  const [ref, setRef] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //   console.log(email);

  const callFun = async (req, res) => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      // console.log("Enter Here")
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getCardEdAllDetail`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      console.log(result.reqEditor[0]);
      setFirstName(result.reqEditor[0].firstName);
      setLastName(result.reqEditor[0].lastName);
      setImageUrl(result.reqEditor[0].image);
    } catch (err) {
      console.log(err);
    }
  };



  const assignedBtn = async(event)=>{

    //  console.log("On Click Assign Btn",cardId)
    setAssignRefersh(!assignRefersh);
    setRef(!ref);
    // console.log(event.target.value);
    // console.log(event.currentTarget.value);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("cardId", cardId);
      formData.append("option", event.currentTarget.value);
      // console.log("Enter Here")
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/UpdateCardEdAllDetail`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    callFun();
  }, [assignRefersh,ref]);

  return (
    <div className="border-solid border border-white rounded-[10px] h-[70px] my-5 w-[90%] mx-auto flex justify-between items-center px-1">
      <div className="flex w-[170px] gap-2">
        <div className="w-[15%] h-[80%] mt-[10px] rounded-[50%]">
          <img className="rounded-[50%]" src={imageUrl}></img>
        </div>
        <div className="w-[60%] h-[80%]">
          <div className="font-bold tracking-wide">
            {firstName} {lastName}
          </div>
          <div className="text-[11px] text-gray-400">{email}</div>
        </div>
      </div>
      <div className="w-[50px] h-[55px] flex-col justify-center px-2 items-center ">
        <div><button value="Assigned" onClick={assignedBtn} className="border-solid border border-grey-500 py-1 px-1 bg-green-500  hover:bg-green-600"><TiTick /></button></div>
        <div><button value="Reject" onClick={assignedBtn} className="border-solid border border-grey-500 py-1 px-1 bg-red-500 hover:bg-red-600"><ImCross /></button></div>
        

      </div>
    </div>
  );
};
export default RequestedCard;
