import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const Demo = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("log");
  }, [number]);
  console.log("render");
  return (
    <div>
      <div className="h-96 w-96 bg-slate-200 mt-10 p-2">
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          type="number"
          className="border-2-red-100 rounded-md"
        />
        <button className="px-4 ml-2 rounded-md bg-green-300">cal</button>
        <div>
          <span className="font-semibold">Res{number}</span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
