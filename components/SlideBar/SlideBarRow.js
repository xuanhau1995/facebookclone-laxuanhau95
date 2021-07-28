import React from "react";
import Image from "next/dist/client/image";
function SlideBarRow({ src, title, Icon, description, IconBg }) {
  return (
    <div className="flex pl-2 h-11 hover:bg-gray-200 rounded-xl cursor-pointer items-center space-x-3 transition ease-in-out duration-300 ">
      {src && (
        <Image src={src} height="30" width="30" className="rounded-full" />
      )}
      {Icon && <Icon className="h-10 text-blue-500" height="30" width="30" />}
      {IconBg && (
        <div className="bg-gray-300 h-7 w-7 rounded-full flex items-center justify-center">
          <IconBg className="h-5" />
        </div>
      )}
      <div className="hidden xl:flex">
        <h1 className="text-xs font-medium">
          {title}
          {description && (
            <p className="text-xs font-light text-blue-500">• {description}</p>
          )}
        </h1>
      </div>
    </div>
  );
}

export default SlideBarRow;
