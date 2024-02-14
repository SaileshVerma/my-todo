"use client";
import { useState } from "react";

export default function Home() {
  const [todoItemTitle, setTodoItemTitle] = useState("");
  const [todoItemDesc, setTodoItemDesc] = useState("");

  const onChangeTitle = (e: any) => {
    setTodoItemTitle(e.target.value);
  };

  const onChangeDesc = (e: any) => {
    setTodoItemDesc(e.target.value);
  };

  const onSubmitHandler = () => {
    if (todoItemTitle == "" || todoItemDesc == "") return;
    const todo = {
      title: todoItemTitle,
      desc: todoItemDesc,
    };

    let toDosJson = localStorage.getItem("todos");
    if (toDosJson) {
      let toDosList = JSON.parse(toDosJson);
      toDosList.push(todo);

      localStorage.setItem("todos", JSON.stringify(toDosList));
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }

    setTodoItemTitle("");
    setTodoItemDesc("");
  };

  return (
    <>
      <section className="  bg-indigo-400 body-font relative w-2/4 mx-auto  h-full">
        <div className="container  px-2 py-5 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Enter Your ToDo
            </h1>
          </div>
          <div className="pl-10 pr-10 mx-auto">
            <div className="flex flex-wrap -m-5">
              <div className="p-2 ">
                <label className="leading-10 text-xl text-black ">Title</label>
                <input
                  onChange={onChangeTitle}
                  type="text"
                  id="name"
                  value={todoItemTitle}
                  name="name"
                  placeholder="Enter your title"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-10 text-xl text-black">
                    Description
                  </label>
                  <textarea
                    onChange={onChangeDesc}
                    id="message"
                    value={todoItemDesc}
                    name="message"
                    placeholder="Enter your description"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-6 w-full ">
                <button
                  onClick={onSubmitHandler}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
