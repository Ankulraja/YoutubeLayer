const Editor = (props) => {
  const firstName = props.data.firstName;
  const lastName = props.data.lastName;
  const email = props.data.email;
  const imageUrl = props.data.image;
  return (
    <div className="border-solid border-b-2 border-white rounded-[10px] h-[60px] my-6 w-[90%] mx-auto flex justify-center items-center gap-x-4 bg">
      <div className="w-[10%] h-[80%] mt-[10px] rounded-[50%]">
        <img className="rounded-[50%]" src={imageUrl}></img>
      </div>
      <div className="w-[60%] h-[80%]">
        <div className="font-bold tracking-wide">
          {firstName} {lastName}
        </div>
        <div className="text-[14px] text-gray-400">{email}</div>
      </div>
    </div>
  );
};
export default Editor;
