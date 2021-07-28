import { PlusCircleIcon } from "@heroicons/react/solid";

import React from "react";

function AddAccount() {
  return (
    <div className="border group rounded-xl flex flex-col w-40 cursor-pointer bg-gray-50 hover:shadow-custom transition ease-in-out duration-300">
      <div className="flex flex-grow justify-center items-center">
        <PlusCircleIcon className="h-10 text-blue-600 group-hover:scale-110 transition ease-in-out duration-300" />
      </div>
      <div className="bg-white py-2 rounded-b-xl justify-center items-center flex">
        <h1 className="text-blue-600">Add Account</h1>
      </div>
    </div>
  );
}

export default AddAccount;
