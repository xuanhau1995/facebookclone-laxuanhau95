import React from "react";

function ButtonOption({ Icon, color }) {
  return (
    <div className="h-10 w-10 rounded-full dark:hover:bg-[#3a3b3c] hover:bg-gray-100 justify-center items-center flex cursor-pointer duration-300">
      {Icon && <Icon className="h-6" style={{ color: color }} />}
    </div>
  );
}

export default ButtonOption;
