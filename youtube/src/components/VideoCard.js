import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  // console.log(snippet, statistics);
  return (
    <div className="w-[200px] h-[240px] border-2 p-2 shadow-lg ">
      <div>
        <img className="" src={thumbnails?.medium.url} alt="" />
      </div>
      <div>
        <h2 className="font-bold">{channelTitle}</h2>
        <h2 className="underline">{title.split("|")[0]}</h2>
      </div>
      <h3 className="bg-gray-300 p-2 rounded-lg">
        {" "}
        view {statistics.viewCount}
      </h3>
    </div>
  );
};

export default VideoCard;
