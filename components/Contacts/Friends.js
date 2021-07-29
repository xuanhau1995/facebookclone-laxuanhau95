import React from "react";
import Image from "next/image";
function Friends({ profile, name }) {
  return (
    <div className="flex items-center space-x-2 rounded-lg cursor-pointer dark:hover:bg-[#3a3b3c] hover:bg-gray-200 duration-500 h-12 px-2">
      <div className="relative ">
        <div className="h-9 w-9 rounded-full bg-gray-400 border z-20 relative dark:border-0">
          <Image src={profile} layout="fill" className="rounded-full" />
        </div>
        <div className="h-3 w-3 rounded-full border-2 border-white dark:border-[#18191a] bg-green-500 absolute bottom-0 right-0 z-40" />
      </div>
      <p className="text-xs font-medium dark:text-[#e4e6eb]">{name}</p>
    </div>
  );
}

export default Friends;
