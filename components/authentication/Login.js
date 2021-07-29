import React from "react";
import Image from "next/dist/client/image";
import fbLogo from "./fb_logo.svg";
import RecentAccount from "./RecentAccount";
import AddAccount from "./AddAccount";
import FormLogin from "./FormLogin";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <>
      <div className="grid grid-cols-12 md:pt-28 lg:pt-32">
        <div className="col-span-12 md:col-span-6 px-4 md:px-0 lg:col-span-6 sm:-ml-14 md:pl-4 lg:pl-20 xl:pl-48 lg:gap-6">
          <div className="flex sm:justify-center">
            <div>
              <div className="mt-6 -m-12 md:-m-12 lg:-m-12">
                <Image
                  src={fbLogo}
                  height={70}
                  width={250}
                  objectFit="contain"
                />
              </div>
              <h1 className="text-2xl mt-10">Recent logins</h1>
              <p className="text-sm text-gray-500">
                Click your picture or add an account.
              </p>
              <div className="pt-5 flex space-x-4">
                <RecentAccount />
                <AddAccount />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 px-4 md:px-0 pt-4 md:pt-4 lg:pt-4 xl:pt-4  md:pr-12 lg:pr-32  xl:pr-52 ">
          <FormLogin onClick={signIn} />
        </div>
      </div>
    </>
  );
}

export default Login;
