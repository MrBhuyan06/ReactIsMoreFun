import React from "react";

const VideoCard = ({ data }) => {
  // console.log(data);
  const { snippet, statistics } = data;
  // console.log(snippet, statistics);

  return (
    <div className="w-[230px] h-[240px] p-2  border-2 rounded-md">
      <div>
        <img
          src={snippet.thumbnails.medium.url}
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="p-2">
        <ul className="flex flex-col">
          <l1 className="font-bold">{snippet.channelTitle}</l1>
          <l1 className="font-semibold underline">
            {snippet.title.split("|")[0]}
          </l1>
          <l1 className="text-blue-400">{statistics.viewCount} View</l1>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
