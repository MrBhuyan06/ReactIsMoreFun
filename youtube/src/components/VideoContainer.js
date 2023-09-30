import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard.js";
import { YOUTUBE_VIDEO_API } from "../config/config.js";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    //get all Propolar video
    getVideo();
  }, []);
  async function getVideo() {
    const readStream = await fetch(YOUTUBE_VIDEO_API);
    const data = await readStream.json();
    // console.log(data.items);
    setVideo(data.items);
  }
  if (video?.length === 0) {
    return;
  }

  return (
    <div className="flex  flex-row flex-wrap justify-center gap-2 mt-10">
      {video.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            {" "}
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
