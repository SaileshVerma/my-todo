import { Children } from "react";
import LoginLayout from "./layout";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-row w-full h-full  justify-between">
      <div className="flex flex-row w-1/2  h-full bg-red-700 justify-start items-start">
        {/* <Image
          layout="fill"
          // width={50}
          objectFit="contain"
          src={"/img.png"}
          alt="unable to load image"
          fill={true}
        ></Image> */}
        <div className="flex flex-col pl-10 pt-4">
          <div className="text-9xl font-mono font-bold text-white">Todo</div>
          <div className="text-7xl font-serif font-bold text-white p-10 pl-24">
            Plan
          </div>
          <div className="text-8xl font-bold text-white p-4 pl-56">Do</div>
          <div className="text-8xl font-thin  text-white p-8">Done</div>
        </div>
      </div>
      <div className="flex flex-col h-full w-1/2 justify-center items-center bg-slate-500">
        <div className="flex flex-col items-start justify-start  gap-2">
          <div className="text-gray-50 font-semibold text-xl">Name</div>
          <input
            type="text"
            placeholder="Enter your name here"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <div className="text-gray-50 font-semibold text-xl">Email</div>
          <input
            type="text"
            placeholder="Enter your email here"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <div className="text-gray-50 font-semibold text-xl">Password</div>
          <input
            type="text"
            placeholder="Enter your password here"
            className="w-full  bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-2 px-3 pr-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button className="bg-red-500 rounded p-2 pl-4 pr-4 mt-5 text-white">
            Sign Up
          </button>
          <div className="text-gray-50 font-medium text-xs">
            Already an existing user?
            <button className="pl-2 text-red-500 text-base">Login in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
