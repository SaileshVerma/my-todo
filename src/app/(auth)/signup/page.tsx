"use client";

import Link from "next/link";
import { CreateUserInput } from "@/app/models/auth";
import { useCreateUserMutation } from "@/app/hooks/authHook";
import { useState } from "react";

export default function SignUpPage() {
  const { mutate, isPending, isError } = useCreateUserMutation();
  const [isSubmit, setIsSubmit] = useState(false);

  const [userFormDataInput, setUserFormDataInput] = useState<CreateUserInput>({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const onSignUpButtonClick = (createUserInput: CreateUserInput) => {
    setFormErrors(validateForm);
    setIsSubmit(true);

    if (Object.keys(formErrors).length > 0 || !isSubmit) {
      return;
    }
    mutate(createUserInput);
    // setFormErrors({});
  };

  const validateForm = () => {
    const errorMap: { [key: string]: string } = {};
    if (!userFormDataInput.name) {
      errorMap.nameErrorText = "Name is required";
    }

    if (!userFormDataInput.email) {
      errorMap.emailErrorText = "Email is required";
    }

    if (!userFormDataInput.password) {
      errorMap.passwordErrorText = "Password is required";
    }

    return errorMap;
  };

  return (
    <>
      <div className="flex flex-col h-full w-1/2 justify-center items-center bg-slate-500">
        <div className="text-gray-50 font-bold text-2xl p-10">SignUp User</div>
        <div className="flex flex-col items-start justify-start  gap-2">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              onSignUpButtonClick(userFormDataInput);
            }}
          >
            <div className="text-gray-50 font-semibold text-xl">Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name here"
              onChange={(event) => {
                setUserFormDataInput({
                  ...userFormDataInput,
                  name: event.target.value,
                });
              }}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p className="text-red-500  h-5">{formErrors.nameErrorText}</p>
            <div className="text-gray-50 font-semibold text-xl">Email</div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email here"
              onChange={(event) => {
                setUserFormDataInput({
                  ...userFormDataInput,
                  email: event.target.value,
                });
              }}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p className="text-red-500 h-5">{formErrors.emailErrorText}</p>
            <div className="text-gray-50 font-semibold text-xl">Password</div>
            <input
              type="text"
              name="password"
              placeholder="Enter your password here"
              onChange={(event) => {
                setUserFormDataInput({
                  ...userFormDataInput,
                  password: event.target.value,
                });
              }}
              className="w-full  bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900  text-base outline-none text-gray-100 py-2 px-3 pr-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p className="text-red-500  h-5">{formErrors.passwordErrorText}</p>
            <button
              type="submit"
              disabled={isPending}
              className="bg-red-500 rounded p-2 pl-4 pr-4 mt-2 text-white"
            >
              Sign Up
            </button>
            <p className="text-red-500  h-2">
              {isError ? "Error!:Unable to signUp user" : ""}
            </p>
          </form>
          <div className="text-gray-50 font-medium text-xs">
            Already an existing user?
            <Link href={"/login"} className="pl-2 text-red-500 text-base">
              Login in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
