import React from "react";

const Comment = ({ info }) => {
  return (
    <div className=" mb-2">
      <div className="flex border-2 w-2/5 p-2 gap-8 items-center bg-gray-200 rounded-md">
        <div className="flex items-center gap-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            alt=""
            className="w-8"
          />
          <p>{info.name}</p>
        </div>
        <p>{info.text}</p>
      </div>
    </div>
  );
};

export default Comment;
