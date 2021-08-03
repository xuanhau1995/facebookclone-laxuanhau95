import React from "react";
import Peoples from "./Peoples";
const peoples = [
  {
    name: "John",
    avatar: "https://links.papareact.com/4zn",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/kxk",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/f0p",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/k2j",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/zof",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/4zn",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/xql",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/snf",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/4u4",
  },
  {
    name: "John",
    avatar: "https://links.papareact.com/kxk",
  },
];
import { UsersIcon } from "@heroicons/react/solid";
function RoomChat() {
  return (
    <div className="shadow bg-white dark:bg-[#242526] p-4 rounded-xl relative">
      <div className="flex items-stretch justify-start overflow-x-scroll scrollbar-hide space-x-2  w-[300px]">
        <button className="border dark:hover:bg-[#3a3b3c] dark:border-blue-500 dark:border-opacity-40 border-blue-100 rounded-full px-3 py-2 flex items-center hover:bg-blue-50 duration-300 whitespace-nowrap">
          <UsersIcon className="h-5 mr-2 text-pink-500" />{" "}
          <p className="text-xs font-semibold text-blue-500">Create Room</p>
        </button>
        <div className="flex space-x-2">
          {peoples.map((people) => (
            <Peoples key={people.avatar} user={people.avatar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomChat;
