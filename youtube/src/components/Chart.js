import React from "react";

const Chart = ({ info }) => {
  const { text, name } = info;
  return (
    <div className="w-/5 border-2 mx-auto mt-2 p-2 bg-slate-200">
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          className="h-8"
          alt=""
        />
        <span className="font-semibold text-lg">{name}</span>
      </div>
      <p className="">{text}</p>
    </div>
  );
};

export default Chart;
