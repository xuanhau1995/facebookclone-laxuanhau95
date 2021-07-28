import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import RightIcon from "./RightIcon";
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

function Header() {
  const [session] = useSession();
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white py-1 px-3 flex items-center shadow">
        {/* Left header */}
        <div className="flex space-x-2 items-center justify-start">
          <Image
            src="http://links.papareact.com/5me"
            width={36}
            height={36}
            layout="fixed"
            className="cursor-pointer"
          />
          <div className="bg-gray-100 h-10 w-10 items-center justify-center rounded-full flex xl:hidden">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <div className="bg-gray-100 h-9 rounded-full items-center px-2 space-x-1 hidden xl:inline-flex w-60">
            <SearchIcon className="h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-gray-100  focus:outline-none placeholder-gray-500 font-light text-sm flex-shrink w-full"
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
          <div
            onClick={signOut}
            className="hidden xl:flex items-center space-x-2 rounded-full p-1 hover:bg-gray-100 cursor-pointer transition-bg"
          >
            <Image
              className="rounded-full cursor-pointer"
              src={session.user.image}
              height="28"
              width="28"
            />
            <h1 className="whitespace-nowrap text-xs pr-2">
              {session.user.name}
            </h1>
          </div>
          <div className="flex xl:hidden">
            <RightIcon Icon={PlusIcon} />
          </div>
          <div className="hidden xl:flex">
            <RightIcon Icon={ViewGridIcon} />
          </div>
          <RightIcon Icon={ChatIcon} />
          <RightIcon Icon={BellIcon} className="hidden" />
          <RightIcon Icon={ChevronDownIcon} />
        </div>
      </header>
    </>
  );
}

export default Header;
