import Modal from "@/app/components/modal";
import { getTodoById, useUpdateTodoMutation } from "@/app/hooks/todoHook";
import { Todo } from "@/app/models/todo";
import { useState } from "react";

export default function EditTodoModal({
  todoId,
  isOpen,
  onClose,
}: {
  todoId: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const todoItem: Todo = getTodoById(todoId);
  const [createTodoInput, setCreateTodoInput] = useState(todoItem);
  const { mutate: updateTodo, isPending, isError } = useUpdateTodoMutation();

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col px-4">
          <label className="text-gray-300 pt-2 py-1 ">Title</label>

          <input
            onChange={(val) => {
              setCreateTodoInput({
                ...createTodoInput,
                title: val.target.value,
              });
            }}
            value={createTodoInput.title}
            type="text"
            id="name"
            // value={todoItemTitle}
            name="name"
            placeholder="Enter your title"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />

          <label className="text-gray-300 pt-5 py-1  ">Description</label>

          <textarea
            onChange={(val) => {
              setCreateTodoInput({
                ...createTodoInput,
                desc: val.target.value,
              });
            }}
            value={createTodoInput.desc}
            id="message"
            name="message"
            placeholder="Enter your description"
            className="w-full  bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
          <button
            className="text-white mt-6 mb-2 px-3 py-1 font-medium border  items-end"
            disabled={isPending}
            onClick={() => {
              updateTodo(createTodoInput);
              onClose();
            }}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}
