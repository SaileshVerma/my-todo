"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface ToDo {
  id: string;
  title: string;
  desc: string;
}

export default function ToDoPage() {
  const [toDosList, setToDosList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4002/tasks")
      .then((res) => {
        let todosParsedList = JSON.parse(JSON.stringify(res.data));
        setToDosList(todosParsedList);
      })
      .catch((err) => {
        alert(`Something went wrong ${err}`);
      });
  }, []);

  const deleteTodoById = (id: string) => {
    axios
      .post(`http://localhost:4002/tasks/${id}`)
      .then((res) => {
        console.log("ITEM DLETED SUCCESFFULYY", res.data);
      })
      .catch((err) => {
        alert(`Something went wrong ${err}`);
      });

    let todosParsedList = toDosList.filter((todo: ToDo) => {
      return todo.id !== id;
    });

    setToDosList(todosParsedList);
  };

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
                {toDosList.length == 0 ? (
                  <h1>No todo to display</h1>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {toDosList.map((e: ToDo) => {
                      if (e.title == "") return;

                      return (
                        <div
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
