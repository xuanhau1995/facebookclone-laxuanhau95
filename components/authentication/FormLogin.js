import React from "react";

function FormLogin({ onClick }) {
  return (
    <>
      <div className="flex justify-end">
        <form className="bg-white shadow-xl rounded-xl p-4 flex flex-col space-y-4 w-4/5">
          <input type="text" placeholder="Email Address" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button
            onClick={onClick}
            className="font-bold bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-800 transition ease-in-out duration-300"
          >
            Log In
          </button>
          <p className="text-blue-600 font-bold text-xs hover:underline cursor-pointer justify-center flex border-b pb-4">
            Forgotten password?
          </p>
          <button className="bg-green-500 text-white p-3 rounded-xl mx-auto hover:bg-green-700 transition ease-in-out duration-300">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}

export default FormLogin;
