import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import React from "react";
import Friends from "./Friends";

const friends = [
  {
    name: "John Nguyen",
    profile: "https://links.papareact.com/4zn",
  },
  {
    name: "La Xuan Hau",
    profile: "https://links.papareact.com/k2j",
  },
  {
    name: "John",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Hulu Hola",
    profile: "https://links.papareact.com/4u4",
  },
  {
    name: "John HangSnag",
    profile: "https://links.papareact.com/kxk",
  },
];

function Contacts() {
  return (
    <div>
      <div className="sticky top-16 mt-3 hidden md:flex">
        <div
          className="max-w-[300px] xl:min-w-[300px] overflow-scroll"
          // style={{ height: 800 }}
        >
          <div className="flex space-x-4 py-2 mr-3">
            <h1 className="flex flex-grow text-sm text-gray-600 dark:text-[#b0b3b8] items-center">
              Contacts
            </h1>
            <VideoCameraIcon className="h-5 text-gray-500 dark:text-[#b0b3b8]" />
            <SearchIcon className="h-5 text-gray-500 dark:text-[#b0b3b8]" />
            <DotsHorizontalIcon className="h-5 text-gray-500 dark:text-[#b0b3b8]" />
          </div>
          <div className="flex flex-col space-y-1">
            {friends.map((friend) => (
              <Friends
                key={friend.profile}
                name={friend.name}
                profile={friend.profile}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
