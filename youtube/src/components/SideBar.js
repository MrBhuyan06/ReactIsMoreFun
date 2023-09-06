import React from "react";

const SideBar = () => {
  return (
    <div className="col-span-2">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
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
      </ul>
    </div>
  );
};

export default SideBar;
