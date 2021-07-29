import React from "react";
import {
  ChevronDownIcon,
  UsersIcon,
  FlagIcon,
  ShoppingCartIcon,
  PlayIcon,
} from "@heroicons/react/solid";
import { UserGroupIcon, DesktopComputerIcon } from "@heroicons/react/outline";
import { session, useSession } from "next-auth/client";
import SlideBarRow from "./SlideBarRow";
import ShortCut from "./ShortCut";
import papagroup from "./img/papapam.jpeg";
import jsGroup from "./img/jsgroup.jpeg";
import UiUX from "./img/ui:uxgroup.jpeg";

function Slidebar() {
  const [session, loading] = useSession();
  return (
    <>
      <div>
        <div className="sticky top-16 z-40 hidden lg:flex">
          <div className="w-10 xl:min-w-[300px]">
            <div>
              <SlideBarRow src={session.user.image} title={session.user.name} />
              <SlideBarRow Icon={UsersIcon} title="Friends" />
              <SlideBarRow Icon={FlagIcon} title="Pages" description="5+ New" />
              <SlideBarRow
                Icon={UserGroupIcon}
                title="Groups"
                description="5 New"
              />
              <SlideBarRow
                Icon={ShoppingCartIcon}
                title="MarketPlace"
                description="5+ New"
              />
              <SlideBarRow
                Icon={DesktopComputerIcon}
                title="Watch"
                description="5+ New"
              />
              <SlideBarRow IconBg={ChevronDownIcon} title="See More" />
            </div>
            <hr className="ml-2 mt-2 dark:border-[#3a3b3c]" />
            <div className="z-0">
              <div className="flex group p-2">
                <h1 className="flex flex-grow text-gray-600 dark:text-[#e4e6eb] text-xs md:text-base font-semibold">
                  Your Shortcuts
                </h1>
                <button className="text-blue-500 dark:hover:bg-[#3a3b3c] text-xs px-2 rounded-md opacity-0 group-hover:opacity-100 transition ease-out duration-300 hover:bg-blue-50">
                  Edit
                </button>
              </div>
              <ShortCut image={papagroup} title="The Official PAPAFAM Group" />
              <ShortCut image={jsGroup} title="Vietnam UX/UI Designers" />
              <ShortCut image={UiUX} title="Javascript Developers" />
              <SlideBarRow IconBg={ChevronDownIcon} title="See More" />
            </div>
            <p className="bottom-0 fixed text-xs text-gray-500 py-4 px-3">
              Facebook clone by Xuan Hau 2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slidebar;
