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
        src="/github-logo-main.png"
        alt="github-logo"
        width="100px"
        height="100px"
        className="w-2l8 rounded-full bg-gray-50 p-1"
      />
      <h1 className="text-xl px-10">Github Profile Viewer</h1>
    </div>
  );
};

export default Logo;
