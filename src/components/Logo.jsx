import React from "react";

const Logo = () => {
  return (
    <div
      className="flex 
    p-4 
    justify-center 
    items-center
    border-b
    border-gray-500
    "
    >
      <img
        src="https://github.com/bharathkalyans/github-profile-viewer-react-app/blob/master/public/github-main.jpg"
        alt="github-logo"
        className="w-2l8 rounded-full bg-gray-50"
      />
      <h1 className="text-xl px-10">Github Profile Viewer</h1>
    </div>
  );
};

export default Logo;
