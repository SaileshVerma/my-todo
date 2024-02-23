"use client";
import { useLoginUserMutation } from "@/app/hooks/authHook";
import { LoginUserInput } from "@/app/models/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [userLoginDataInput, setUserLoginDataInput] = useState<LoginUserInput>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [allowUserToLogin, setAllowUserToLogin] = useState(false);

  const { mutate, isPending, isError, error } = useLoginUserMutation();

  const onFormSubmitHandler = () => {
    setAllowUserToLogin(true);
    setFormErrors(validateForm());
  };

  const validateForm = () => {
    const errorMap: { [key: string]: string } = {};

    if (!userLoginDataInput.email) {
      errorMap.emailErrorText = "Email is required";
    }

    if (!userLoginDataInput.password) {
      errorMap.passwordErrorText = "Password is required";
    }

    // setFormErrors(errorMap);

    return errorMap;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && allowUserToLogin) {
      mutate(userLoginDataInput);
    } else {
      setAllowUserToLogin(false);
    }
  }, [formErrors, allowUserToLogin]);

  return (
    <>
      <div className="flex flex-col h-full w-1/2 justify-center items-center bg-slate-500">
        <div className="text-gray-50 font-bold text-2xl p-10">Login User</div>
        <div className="flex flex-col items-start justify-start  gap-2">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              validateForm();
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
            <p className="text-red-500  h-5">{formErrors.emailErrorText}</p>
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
            <p className="text-red-500  h-5">{formErrors.passwordErrorText}</p>
            <button
              type="submit"
              disabled={isPending}
              className="bg-red-500 rounded p-2 pl-4 pr-4 mt-2 text-white"
            >
              Login
            </button>
            <p className="text-red-500">
              {isError ? `something went wrong` : ""}
            </p>
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
