import React from "react";
import Image from "next/dist/client/image";

function ShortCut({ image, title }) {
  return (
    <div className="flex items-center space-x-2 hover:bg-gray-200 h-11 pl-2 rounded-xl cursor-pointer">
      {image && (
        <Image
          src={image}
          objectFit="cover"
          height="30"
          width="30"
          className="rounded-md"
        />
      )}
      <h1 className="text-xs font-medium hidden xl:flex">{title}</h1>
    </div>
  );
}

export default ShortCut;
