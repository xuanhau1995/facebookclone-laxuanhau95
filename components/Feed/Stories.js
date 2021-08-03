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
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
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
        <div className="flex space-x-2 relative ">
          {/* Card add new Story */}
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
          {/* Card Peopel stories */}
          {stories.map((story) => (
            <CardStories
              key={story.src}
              name={story.name}
              src={story.src}
              profile={story.profile}
            />
          ))}
        </div>
        <div className="dark:bg-[#242526] dark:border-[#242526] dark:hover:bg-[#3a3b3c] dark:text-[#b0b3b8] absolute -right-6 top-16 z-30 text-gray-500 flex items-center h-11 w-11 bg-white shadow-md border border-gray-200 rounded-full justify-center cursor-pointer hover:scale-105 transition ease-in-out duration-300">
          <ArrowRightIcon className="h-4" />
        </div>
      </div>
    </>
  );
}

export default Stories;
