import React from "react";
import {
  ArrowCircleRightIcon,
  ArrowNarrowDownIcon,
  ArrowRightIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import Image from "next/dist/client/image";
import CardStories from "./CardStories";

const stories = [
  {
    id: "1",
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: "2",
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: "3",
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    id: "4",
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: "5",
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];
function Stories() {
  const [session, loading] = useSession();
  return (
    <>
      <div className="z-0 relative">
        <div className="flex space-x-2 overflow-x-scroll w-[350px] sm:w-auto scrollbar-hide">
          {/* Card add new Story */}
          <div>
            <div className="w-24 h-44 rounded-xl bg-white dark:bg-[#242526] dark:text-[#e4e6eb] relative flex justify-center shadow cursor-pointer hover:shadow-xl transition ease-in-out duration-300">
              <div className="relative w-full h-28">
                <Image
                  src={session.user.image}
                  alt="image"
                  loading="eager"
                  layout="fill"
                  className="object-cover filter rounded-t-xl"
                />
              </div>
              <div className="absolute top-24 flex justify-center flex-col">
                <div className="h-9 w-9 border-4 border-white  rounded-full bg-blue-500 flex justify-center items-center text-white dark:border-[#242526]">
                  <PlusIcon className="h-8" />
                </div>
                <p className="text-xs text-center w-10 font-medium">
                  Create Story
                </p>
              </div>
            </div>
          </div>
          {/* Card Peopel stories */}
          <div className="flex space-x-2">
            {stories.slice(0, 5).map((story) => (
              <CardStories
                key={story.id}
                name={story.name}
                src={story.src}
                profile={story.profile}
              />
            ))}
          </div>
          {/* Card Peopel stories */}
        </div>
        <div className="hidden md:flex dark:bg-[#242526] dark:border-[#242526] dark:hover:bg-[#3a3b3c] dark:text-[#b0b3b8] absolute -right-6 top-16 z-30 text-gray-500 items-center h-11 w-11 bg-white shadow-md border border-gray-200 rounded-full justify-center cursor-pointer hover:scale-105 transition ease-in-out duration-300">
          <ArrowRightIcon className="h-4" />
        </div>
      </div>
    </>
  );
}

export default Stories;
