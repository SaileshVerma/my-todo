"use client";
import Image from "next/image";
import { useState } from "react";
import { useMeQuery } from "../hooks/authHook";

export const SideDrawer = () => {
  const [isExtended, setIsExtended] = useState(false);
  const { data: user, isLoading, isError } = useMeQuery();

  return (
    <div className="bg-slate-900 transition-all duration-500 ease-in-out">
      <div className="flex flex-col px-3 pt-5 text-white  justify-between h-4/5">
        <div>
          <div className="flex flex-row  justify-between  ">
            <button
              disabled={isLoading}
              onClick={() => {
                setIsExtended(true);
              }}
            >
              <Image
                color="white"
                alt="unable to load profile"
                src={"/user.svg"}
                width={isExtended ? 100 : 50}
                height={isExtended ? 100 : 50}
              />
            </button>
            <div className={`${!isExtended ? "hidden" : ""}`}>
              <button
                onClick={() => {
                  setIsExtended(false);
                }}
              >
                <Image
                  color="white"
                  alt="unable to load"
                  src={"/arrow.png"}
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>

          <div
            className={`pt-5 font-bold text-2xl text-start ${
              !isExtended ? "hidden" : ""
            }`}
          >
            Welcome {isLoading ? "User" : user.name}
          </div>
        </div>

        <button
          className={`border border-white px-3 py-2 text-xl font-semibold ${
            !isExtended ? "hidden" : ""
          }`}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
