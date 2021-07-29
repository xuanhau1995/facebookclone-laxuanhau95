import React, { useState } from "react";
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
import RightIcon from "./RightIcon";
import { ThemeContext } from "../hooks/ThemeContext";
import Image from "next/image";
import { signOut, useSession } from "next-auth/client";

const RightHeader = () => {
  const [session] = useSession();
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <>
      <div
        onClick={signOut}
        className="hidden xl:flex items-center space-x-2 rounded-full p-1 dark:hover:bg-[#3a3b3c] hover:bg-gray-100 cursor-pointer transition-bg"
      >
        <Image
          className="rounded-full cursor-pointer"
          src={session.user.image}
          height="28"
          width="28"
        />
        <h1 className="whitespace-nowrap text-xs pr-2 dark:text-[#e4e6eb]">
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
      {theme === "light" ? (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <RightIcon Icon={MoonIcon} />
        </div>
      ) : (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <RightIcon Icon={LightBulbIcon} />
        </div>
      )}
      <RightIcon Icon={ChevronDownIcon} />
    </>
  );
};

export default RightHeader;
