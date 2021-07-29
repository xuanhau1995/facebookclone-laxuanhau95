import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import RightIcon from "./RightIcon";
import RightHeader from "./RightHeader";
import {
  BeakerIcon,
  SearchIcon,
  HomeIcon,
  DesktopComputerIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  PlusIcon,
  LightBulbIcon,
  MoonIcon,
} from "@heroicons/react/solid";

import {
  CollectionIcon,
  FlagIcon,
  MenuIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import { ThemeContext } from "../hooks/ThemeContext";
function Header() {
  const [session] = useSession();
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#242526] py-1 px-3 flex items-center shadow">
        {/* Left header */}
        <div className="flex space-x-2 items-center justify-start">
          <Image
            src="http://links.papareact.com/5me"
            width={36}
            height={36}
            layout="fixed"
            className="cursor-pointer"
          />
          <div className="bg-gray-100   h-10 w-10 items-center justify-center rounded-full flex xl:hidden">
            <SearchIcon className="h-5 text-gray-500 dark:text-[#3a3b3c]" />
          </div>
          <div className="bg-gray-100 dark:bg-[#3a3b3c] h-9 rounded-full items-center px-2 space-x-1 hidden xl:inline-flex w-60">
            <SearchIcon className="h-5 text-gray-500 dark:text-[#e4e6eb]" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-gray-100 dark:bg-[#3a3b3c] dark:placeholder-[#b0b3b8] dark:text-[#e4e6eb]  focus:outline-none placeholder-gray-500 font-light text-sm flex-shrink w-full"
            />
          </div>
        </div>
        {/* center header */}
        <div className="flex md:space-x-3 lg:space-x-3 xl:space-x-3 flex-grow lg:justify-center md:justify-center xl:justify-center ml-4 md:ml-0">
          <div className="md:flex hidden">
            <HeaderItems active Icon={HomeIcon} />
          </div>
          <div className="md:flex hidden">
            <HeaderItems nonActive Icon={FlagIcon} />
          </div>
          <div className="md:flex hidden">
            <HeaderItems nonActive Icon={PlayIcon} />
          </div>
          <div className="md:flex hidden">
            <HeaderItems nonActive Icon={ShoppingCartIcon} />
          </div>
          <div className="md:flex hidden">
            <HeaderItems nonActive Icon={UserGroupIcon} />
          </div>
          <div className="xl:hidden flex">
            <HeaderItems nonActive Icon={MenuIcon} />
          </div>
        </div>
        {/* Right header */}
        <div className="flex space-x-4 sm:space-x-2 items-center justify-end">
          <RightHeader />
        </div>
      </header>
    </>
  );
}

export default Header;
