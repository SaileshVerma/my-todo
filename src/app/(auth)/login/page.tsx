"use client";
import { LoginUserInput } from "@/app/models/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [userLoginDataInput, setUserLoginDataInput] = useState<LoginUserInput>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const onFormSubmitHandler = () => {};

  const validateForm = () => {
    const errorMap: { [key: string]: string } = {};

    if (!userLoginDataInput.email) {
      errorMap.emailErrorText = "Email is required";
    }

    if (!userLoginDataInput.password) {
      errorMap.passwordErrorText = "Password is required";
    }

    return errorMap;
  };

  return (
    <>
      <div className="flex flex-col h-full w-1/2 justify-center items-center bg-slate-500">
        <div className="flex flex-col items-start justify-start  gap-2">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setFormErrors(validateForm());
              onFormSubmitHandler();
            }}
          >
            <div className="text-gray-50 font-semibold text-xl">Email</div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email here"
              onChange={(event) => {
                setUserLoginDataInput({
                  ...userLoginDataInput,
                  email: event.target.value,
                });
              }}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p className="text-red-500">{formErrors.emailErrorText}</p>
            <div className="text-gray-50 font-semibold text-xl">Password</div>
            <input
              type="text"
              name="password"
              placeholder="Enter your password here"
              onChange={(event) => {
                setUserLoginDataInput({
                  ...userLoginDataInput,
                  password: event.target.value,
                });
              }}
              className="w-full  bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-2 px-3 pr-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p className="text-red-500">{formErrors.passwordErrorText}</p>
            <button
              type="submit"
              // onClick={() => router.push("/signup")}
              className="bg-red-500 rounded p-2 pl-4 pr-4 mt-5 text-white"
            >
              Login
            </button>
          </form>
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
