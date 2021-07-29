import React from "react";

function OptionReactions({ Icon, title }) {
  return (
    <>
      <div className="dark:hover:bg-[#3a3b3c] flex items-center space-x-2 cursor-pointer rounded-md flex-grow justify-center h-9 hover:bg-gray-100 duration-500">
        {Icon && <Icon className="h-5 text-gray-500 dark:text-[#e4e6eb]" />}
        <h1 className="text-xs text-gray-500 dark:text-[#e4e6eb]">{title}</h1>
      </div>
    </>
  );
}

export default OptionReactions;
