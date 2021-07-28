import React from "react";

function OptionItems({ Icon, title, color }) {
  return (
    <div className="flex space-x-2 items-center rounded-lg cursor-pointer p-2 w-full justify-center hover:bg-gray-100 transition ease-in-out duration-300">
      {Icon && <Icon className="h-6" style={{ color: color }} />}
      <h1 className="text-sm font-medium text-gray-500">{title}</h1>
    </div>
  );
}

export default OptionItems;
