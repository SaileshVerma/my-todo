"use client";
import {
  useDeleteTodoMutation,
  useTodoListQuery,
  useUpdateTodoIsCompletedMutation,
} from "../../hooks/todoHook";
import { Todo } from "../../models/todo";
import { useState } from "react";
import EditTodoModal from "./components/editModal";

export default function ToDoPage() {
  const [idOfSelectedTask, setIdOfSelectedTask] = useState("");
  const [toOpenModal, setToOpenModal] = useState(false);
  const { data, isLoading, error } = useTodoListQuery();
  const { mutate, isPending, isError } = useDeleteTodoMutation();
  const {
    mutate: toggleIsCompleted,
    isPending: toggleCompletedIsPending,
    isError: _,
  } = useUpdateTodoIsCompletedMutation();

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
      {idOfSelectedTask != "" && toOpenModal && (
        <EditTodoModal
          todoId={idOfSelectedTask}
          isOpen={toOpenModal}
          onClose={() => setToOpenModal(false)}
        />
      )}
      <div className="container mx-auto ">
        <section className={`text-gray-900 body-font `}>
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
                          className={`${
                            e.isCompleted && "opacity-60"
                          } h-full bg-gray-800 bg-opacity-90 px-8 pt-4 pb-6 rounded-lg overflow-hidden text-center relative`}
                        >
                          <div className="check-box absolute right-2 top-2">
                            <input
                              disabled={toggleCompletedIsPending}
                              onClick={() =>
                                toggleIsCompleted({
                                  ...e,
                                  isCompleted: !e.isCompleted ?? false,
                                })
                              }
                              height={20}
                              width={20}
                              className="accent-blue-200"
                              checked={e.isCompleted ?? false}
                              type="checkbox"
                            />
                          </div>
                          <h1
                            className={`title-font sm:text-2xl text-xl font-medium text-white mb-3  ${
                              e.isCompleted && "line-through"
                            }`}
                          >
                            {e.title === "" ? "No Title!" : e.title}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {e.desc == "" ? "No description" : e.desc}
                          </p>

                          <div className="flex flex-row justify-end">
                            <span className="text-gray-500 inline-flex items-center leading-none text-sm px-5">
                              <button
                                disabled={isPending}
                                onClick={() => deleteTodoById(e.id)}
                                className="text-red-600 "
                              >
                                Remove
                              </button>
                            </span>

                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              <button
                                // disabled={isPending}
                                onClick={() => {
                                  setIdOfSelectedTask(e.id);
                                  setToOpenModal(true);
                                }}
                                className="text-red-600 "
                              >
                                Edit
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
