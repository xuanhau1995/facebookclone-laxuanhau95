import React from "react";

function HeaderItems({ Icon, active, nonActive }) {
  return (
    <div
      className={`cursor-pointer ${
        nonActive && "md:hover:bg-gray-100 transition-bg"
      }  rounded-lg items-center flex justify-center group`}
    >
      <Icon
        className={`h-7 text-gray-500 text-center md:mx-4 lg:mx-8 xl:mx-10 xxl:mx-10 my-2 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderItems;
