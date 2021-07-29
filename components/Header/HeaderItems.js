import React from "react";

function HeaderItems({ Icon, active, nonActive }) {
  return (
    <div
      className={`cursor-pointer ${
        nonActive &&
        "md:hover:bg-gray-100 dark:hover:bg-[#3a3b3c] transition-bg"
      }  rounded-lg items-center flex justify-center group`}
    >
      <Icon
        className={`h-7 text-gray-500 text-center md:mx-4 lg:mx-8 xl:mx-10 xxl:mx-10 my-2 ${
          active ? "text-blue-500 dark:text-blue-500" : "dark:text-[#b0b3b8]"
        }`}
      />
    </div>
  );
}

export default HeaderItems;
