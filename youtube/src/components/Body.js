import React from "react";
import SideBar from "./SideBar.js";
import MainContainer from "./MainContainer.js";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
