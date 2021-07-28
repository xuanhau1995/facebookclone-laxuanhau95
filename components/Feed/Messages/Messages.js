import { PencilAltIcon } from "@heroicons/react/outline";
import React from "react";

function Messages() {
  return (
    <div className="fixed bottom-2 z-50 right-2 h-12 w-12 bg-white rounded-full shadow-3xl cursor-pointer hover:brightness-90 duration-500 justify-center items-center flex">
      <PencilAltIcon className="h-6" />
    </div>
  );
}

export default Messages;
