"use client";
import axios from "axios";
import { useDeleteTodoMutation, useTodoListQuery } from "../../hooks/todoHook";
import { Todo } from "../../models/todo";
import { useState } from "react";

export default function ToDoPage() {
  const { data, isLoading, error } = useTodoListQuery();
  const { mutate, isPending, isError } = useDeleteTodoMutation();

  const deleteTodoById = (id: string) => {
    mutate(id);
  };

  if (isLoading) {
    return <h1>LOADING WAIT...</h1>;
  }

  if (error) {
    return <h1>SOMETHING WENT WRONG....{JSON.stringify(error)}</h1>;
  }

  return (
    <>
      <div className="container mx-auto ">
        <section className="text-gray-900 body-font">
          <div>
            <div>
              <div className="p-8 lg:w-full h-[50%]">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
                  Your todos
                </h1>

                {data.length == 0 ? (
                  <h1>No todo to display</h1>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {data.map((e: Todo) => {
                      if (e.title == "") return;

                      return (
                        <div
                          key={e.id}
                          id={e.id}
                          className="h-full bg-gray-800 bg-opacity-90 px-8 pt-4 pb-10 rounded-lg overflow-hidden text-center relative"
                        >
                          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                            {e.title === "" ? "No Title!" : e.title}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {e.desc == "" ? "No description" : e.desc}
                          </p>

                          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              <button
                                disabled={isPending}
                                onClick={() => deleteTodoById(e.id)}
                                className="text-red-600 "
                              >
                                Remove
                              </button>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
