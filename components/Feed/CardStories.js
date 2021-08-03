import React from "react";
import Image from "next/image";

function CardStories({ src, profile, name }) {
  return (
    <div className="w-24 h-44 rounded-xl relative shadow cursor-pointer hover:shadow-xl transition duration-300 z-20">
      <div className="border-2 border-blue-500 absolute z-10 h-9 w-9 rounded-full m-3">
        <Image
          loading="eager"
          alt="img"
          src={src}
          layout="fill"
          className="rounded-full"
        />
      </div>
      <Image
        src={profile}
        alt="image"
        loading="eager"
        layout="fill"
        className="object-cover rounded-xl brightness-75 filter z-0 transform transition duration-500 hover:brightness-50"
      />
      <h1 className="text-xs z-50 absolute bottom-2 text-white font-medium mx-2">
        {name}
      </h1>
    </div>
  );
}

export default CardStories;
