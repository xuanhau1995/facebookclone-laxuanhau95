import React from "react";

function RightIcon({ Icon }) {
  return (
    <div className="bg-gray-100 dark:bg-[#3a3b3c] p-2 rounded-full flex hover:bg-gray-200 cursor-pointer transition-bg">
      <Icon className="h-6 dark:text-[#e4e6eb]" />
    </div>
  );
}

export default RightIcon;
