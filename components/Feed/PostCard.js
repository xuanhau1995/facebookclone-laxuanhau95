import React from "react";
import Image from "next/image";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  AnnotationIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import OptionReactions from "./OptionReactions";
function PostCard({ name, email, message, image, postImage, timestamp }) {
  return (
    <div className="bg-white shadow rounded-xl">
      <div className="flex pl-4">
        <div className="flex flex-grow pt-3 space-x-2">
          <div className="relative h-10 w-10">
            <Image
              src={image}
              objectFit="cover"
              layout="fill"
              className="rounded-full h-10 w-10 border"
            />
            <div className="h-3 w-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0" />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm  font-semibold">{name}</h1>
            {timestamp ? (
              <p className="text-xs font-light text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <div className="h-10 w-10 rounded-full hover:bg-gray-100 duration-500 justify-center items-center flex m-1 cursor-pointer">
          <DotsHorizontalIcon className="h-4" />
        </div>
      </div>
      <div className="pt-4 space-y-4">
        <p className="text-xs text-gray-800 pl-4">{message}</p>
        {postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={postImage} objectFit="cover" layout="fill" />
          </div>
        )}
      </div>
      <hr className="mx-4 mt-3" />
      <div className="px-4 py-2 flex justify-between ">
        <OptionReactions Icon={ThumbUpIcon} title="Like" />
        <OptionReactions Icon={AnnotationIcon} title="Comment" />
        <OptionReactions Icon={ShareIcon} title="Share" />
      </div>
    </div>
  );
}

export default PostCard;
