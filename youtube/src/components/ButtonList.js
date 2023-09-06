import React from "react";

const ButtonList = ({ name }) => {
  return (
    <div className="flex   mt-2 w-full">
      <button className="border-2 p-2 bg-gray-300 rounded-md">{name}</button>
    </div>
  );
};

export default ButtonList;
