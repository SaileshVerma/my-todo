"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col h-full w-1/2 justify-center items-center bg-slate-500">
        <div className="flex flex-col items-start justify-start  gap-2">
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
          <button
            onClick={() => router.push("/signup")}
            className="bg-red-500 rounded p-2 pl-4 pr-4 mt-5 text-white"
          >
            Login
          </button>
          <div className="text-gray-50 font-medium text-xs">
            Not a user?
            <Link href={"/signup"} className="pl-2 text-red-500 text-base">
              SignUp now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
