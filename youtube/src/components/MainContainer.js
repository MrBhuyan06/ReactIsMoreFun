import React from "react";
import ButtonList from "./ButtonList.js";
import VideoContainer from "./VideoContainer.js";

const MainContainer = () => {
  return (
    <div className="w-5/5 border-2">
      <div>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
