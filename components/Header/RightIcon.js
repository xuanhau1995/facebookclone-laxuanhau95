import React from "react";

function RightIcon({ Icon }) {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex hover:bg-gray-200 cursor-pointer transition-bg">
      <Icon className="h-6
      " />
    </div>
  );
}

export default RightIcon;
