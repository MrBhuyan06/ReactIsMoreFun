import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { fact, findPrime } from "../config/helper.js";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const value = fact(number);
  const prime = findPrime(number);

  return (
    <div>
      <div
        className={`h-96 w-96 mt-10 bg-slate-100 p-2 ${
          dark && "bg-black text-white"
        }    `}
      >
        <div>
          <button
            className=" bg-red-100  rounded-md  mb-2 px-4"
            onClick={() => {
              setDark(!dark);
            }}
          >
            DarkTheme
          </button>
        </div>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
          type="number"
          className="border-2-red-100 rounded-md text-green-300"
        />
        <button className="px-4 ml-2 rounded-md bg-green-300">cal</button>
        <div>
          <span className="font-semibold">Res{prime}</span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
