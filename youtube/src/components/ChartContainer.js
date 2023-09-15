import React, { useEffect, useState } from "react";
import Chart from "./Chart.js";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../config/liveChart.js";
import { generateRandomName } from "../config/helper.js";
import { makeRandomMessage } from "../config/helper.js";
import store from "../config/store.js";

const ChartContainer = () => {
  const dispatch = useDispatch();
  const liveMsg = useSelector((store) => store.liveChart.liveMsg);

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addMsg({
          name: generateRandomName(),
          text: makeRandomMessage(20) + "💪",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  });

  return (
    <div className="px-2 h-full py-4  drop-shadow-lg flex  flex-col-reverse overflow-y-scroll   ">
      {liveMsg.map((ele, index) => {
        return <Chart key={index} info={ele} />;
      })}
    </div>
  );
};

export default ChartContainer;
