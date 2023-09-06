import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col items-center  shadow-xl  ">
      <div className="flex items-center col-span-3  gap-2">
        <img
          className="w-10 h-10"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt=""
        />
        <img
          className="h-20 w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="col-span-7 ">
        <input
          className="w-1/2 p-2 rounded-l-full border-gray-400 border-2"
          type="text"
        />
        <button className="border-2 font-bold p-2 rounded-r-full bg-red-600">
          Search
        </button>
      </div>
      <div className="col-span-2">
        <img
          className="w-10"
          src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
