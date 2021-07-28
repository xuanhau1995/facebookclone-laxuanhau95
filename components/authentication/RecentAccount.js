import React from "react";
import Image from "next/dist/client/image";
import AvatarDemo from "./photo.jpeg";
import {
  BeakerIcon,
  SearchIcon,
  HomeIcon,
  DesktopComputerIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/react/solid";
function RecentAccount() {
  return (
    <div className="group relative border rounded-xl flex flex-col w-40 cursor-pointer bg-white hover:shadow-custom transition ease-in-out duration-300">
      <Image
        className="rounded-t-xl"
        src={AvatarDemo}
        objectFit="cover"
        height={1000}
      />
      <h1 className="justify-center flex py-2">La Xuan Hau</h1>
      <div className="absolute top-1 left-1 bg-gray-500 p-1 rounded-full group-hover:scale-150 duration-300 group-hover:bg-white">
        <XIcon className="h-3 text-white group-hover:text-gray-800" />
      </div>
      <div className="absolute bg-red-500 h-6 w-6 rounded-full text-xs font-semibold justify-center items-center flex -top-2 -right-2 text-white shadow-xl">
        3
      </div>
    </div>
  );
}

export default RecentAccount;
