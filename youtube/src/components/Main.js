import React from "react";
import SideBar from "./SideBar.js";
import MainContainer from "./MainContainer.js";

const Main = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Main;