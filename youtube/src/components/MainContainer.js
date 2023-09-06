import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList.js";
import { BUTTONNAME } from "../contant/common.js";
import { YOUTUBE_VIDEO_API } from "../contant/common.js";
import VideoCard from "./VideoCard.js";
const MainContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getAllVideo();
  }, []);
  async function getAllVideo() {
    const stramData = await fetch(YOUTUBE_VIDEO_API);
    const data = await stramData.json();

    setVideoList(data.items);
  }
  if (videoList.length === 0) {
    console.log(videoList);
    return;
  }

  return (
    <div className="col-span-10">
      <div className="flex ">
        {BUTTONNAME.map((btn) => {
          return <ButtonList key={btn.id} {...btn} />;
        })}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {videoList.map((video) => {
          return <VideoCard key={video.id} info={video} />;
        })}
      </div>
    </div>
  );
};

export default MainContainer;
