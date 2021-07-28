import React from "react";
import Image from "next/dist/client/image";
function Peoples({ user }) {
  return (
    <>
      <div className="relative h-10 w-10 rounded-full border">
        <Image src={user} layout="fill" className="rounded-full" />
        <div className="h-3 w-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0" />
      </div>
    </>
  );
}

export default Peoples;
