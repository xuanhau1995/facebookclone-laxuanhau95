import React from "react";
import Stories from "./Stories";
import { useSession } from "next-auth/client";
import Image from "next/image";
import CreateStory from "./CreateStory";
import RoomChat from "./RoomChat";
import Posts from "./Posts";
import Messages from "./Messages/Messages";
function Feed({ posts }) {
  const [session] = useSession();
  return (
    <div className="flex flex-grow mx-auto pt-4 overflow-y-auto scrollbar-hide h-screen ">
      <div className="mx-auto space-y-4">
        <Stories />
        <CreateStory />
        <RoomChat />
        <Posts posts={posts} />
        <Messages />
      </div>
    </div>
  );
}

export default Feed;
