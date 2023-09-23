import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../config/appNavigation.js";
import { useDispatch } from "react-redux";
import Comment from "./Comment.js";
import CommentContainer from "./CommentContainer.js";
import ChartContainer from "./ChartContainer.js";
import { addMsg } from "../config/liveChart.js";

const WatchPage = () => {
  const disPatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const [message, setLiveMessage] = useState("");

  console.log(search.get("v"));
  useEffect(() => {
    disPatch(closeMenu());
  }, []);
  const dispacth = useDispatch();

  return (
    <div className="mt-4 ml-2">
      <div className="flex">
        <div className="">
          <iframe
            width="1050"
            height="500"
            src={`https://www.youtube.com/embed/${search.get("v")}`}
            title={`${search.get("v")}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full m-2 border-4 rounded-md max-h-[500px] l">
          <ChartContainer />
          <div className="w-full ">
            <input
              className="w-3/4 mx-auto border-2 px-2 py-2 rounded-l-full"
              type="text"
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button
              className="bg-red-100 w-1/5 border-2 px-2 py-2 rounded-r-full"
              onClick={() => {
                dispacth(
                  addMsg({
                    name: "Abhishek",
                    text: message,
                  })
                );
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl">Comments</h1>
        <div className="">
          {/* /Comments */}
          <CommentContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
