import React from "react";
import { useSelector } from "react-redux";
import store from "../config/store.js";

const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isOpenMenu);
  if (!isOpen) {
    return;
  }

  return (
    <div className="w-2/5 p-2 shadow-lg  ml-2">
      <ul>
        <li>Home</li>

        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-4">SubScription</h1>
      <ul>
        <li>Music</li>
        <li>sport</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>GOM</li>
        <li>sport</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default SideBar;
