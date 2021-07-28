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
      <div className="flex justify-center mt-32">
        <div className="flex xl:m-auto mx-20" style={{ width: 980 }}>
          <div className="flex flex-col flex-grow">
            <div className="-m-12">
              <Image src={fbLogo} height={70} width={250} objectFit="contain" />
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
          <div className="flex flex-col flex-grow">
            <FormLogin onClick={signIn} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 p-4 w-full bg-white">
        <h1 className="text-xs text-gray-600 float-right">
          Facebook Clone 2021 by La Xuan Hau
        </h1>
      </div>
    </>
  );
}

export default Login;
