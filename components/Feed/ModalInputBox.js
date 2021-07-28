import {
  ArrowDownIcon,
  CameraIcon,
  ChevronDownIcon,
  EmojiHappyIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import Image from "next/dist/client/image";
import { useSession } from "next-auth/client";
import ButtonOptions from "./ButtonOption";
import {
  UserAddIcon,
  UsersIcon,
  LocationMarkerIcon,
  DotsHorizontalIcon,
  PencilIcon,
} from "@heroicons/react/solid";

function ModalInputBox({
  modal,
  onClose,
  onClick,
  inputRef,
  src,
  filepickerRef,
  addImageToPost,
  imageToPost,
  removeImage,
}) {
  const [session] = useSession();
  if (!modal) return null;
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          id="overlay"
          onClick={onClose}
          className=" fixed h-screen z-50 inset-x-0 bottom-0 bg-gray-400 opacity-60"
        />
        <div
          id="modal"
          className="bg-white shadow-3xl p-4 rounded-xl z-50 absolute w-1/3"
        >
          <div id="header-modal" className="flex items-center ">
            <h1 className="flex flex-grow text-lg font-semibold justify-center">
              Create Post
            </h1>
            <button
              onClick={onClose}
              className="h-8 w-8 bg-gray-100 rounded-full justify-center items-center flex hover:brightness-90 duration-500"
            >
              <XIcon className="h-6" />
            </button>
          </div>
          <hr className="my-4" />
          <div>
            <div className="flex space-x-3 items-center">
              <Image
                src={session.user.image}
                height={42}
                width={42}
                layout="fixed"
                className="rounded-full border cursor-pointer hover:brightness-75 duration-300"
              />
              <label>
                <h1 className="text-sm font-semibold pb-1">
                  {session.user.name}
                </h1>
                <div className="flex bg-gray-100 rounded-md p-1 px-2 items-center space-x-1 cursor-pointer hover:bg-gray-200">
                  <UsersIcon className="h-3" />
                  <h1 className="text-xs font-medium text-gray-600">
                    Friend except
                  </h1>
                  <ChevronDownIcon className="h-3" />
                </div>
              </label>
            </div>
            <div className="pt-4">
              <textarea
                ref={inputRef}
                id=""
                rows="2"
                placeholder={`What on your mind, ${session.user.name}?`}
                className="w-full focus:outline-none"
              />
              {imageToPost && (
                <div className="w-full h-72 border rounded-xl object-cover relative mb-5 group">
                  <div
                    onClick={removeImage}
                    className="h-6 w-6 bg-white border border-gray-100 flex justify-center items-center rounded-full absolute top-3 right-3 cursor-pointer group-hover:scale-110 duration-500 z-10"
                  >
                    <XIcon className="h-4" />
                  </div>
                  <div className="absolute z-10 top-3 left-3 flex space-x-3 opacity-0 group-hover:opacity-100 duration-500">
                    <button className="bg-white px-2 h-8 flex rounded-md items-center font-medium text-xs">
                      <PencilIcon className="h-4 mr-1" /> Edit
                    </button>
                    <button className="bg-white px-2 h-8 flex rounded-md items-center font-medium text-xs">
                      <CameraIcon className="h-4 mr-1" /> Add Photo/Videos
                    </button>
                  </div>
                  <Image
                    src={src}
                    objectFit="cover"
                    layout="fill"
                    className="h-full w-full rounded-xl z-0"
                  />
                </div>
              )}
              <div className="flex justify-around p-2 px-4 border border-gray-200 rounded-xl shadow items-center cursor-pointer">
                <h1 className="flex flex-grow text-sm">Add to Your Post</h1>
                <label
                  htmlFor="uploadimg"
                  className="h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer items-center justify-center flex duration-500"
                >
                  <CameraIcon className="h-6 text-green-400" />
                  <input
                    type="file"
                    name=""
                    id="uploadimg"
                    ref={filepickerRef}
                    onChange={addImageToPost}
                    hidden
                  />
                </label>
                <ButtonOptions Icon={UserAddIcon} color="#5190FA" />
                <ButtonOptions Icon={LocationMarkerIcon} color="#F0A502" />
                <ButtonOptions Icon={EmojiHappyIcon} color="#A530E3" />
                <ButtonOptions Icon={DotsHorizontalIcon} color="#8c8c8c" />
              </div>
              <button
                type="submit"
                onClick={onClick}
                // disabled
                className="bg-blue-500 text-white h-9 w-full rounded-xl mt-3 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalInputBox;
