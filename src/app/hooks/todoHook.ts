import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import todoService from '../services/todoService'
import {Todo} from "../models/todo";

export const useTodoListQuery = () =>
    useQuery({
        queryKey: ["todos"],
        queryFn: () => todoService.getToDos(),
    });



export function getTodoById(id: string): Todo {
    const queryClient = useQueryClient();
    const data: Array<Todo> = queryClient.getQueryData(['todos']) ?? []

    return data.find((todo: Todo) => {
        return todo.id == id
    }) ?? {
        id: '',
        desc: '',
        title: '',
        isCompleted: false,
    };

}

export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (todo: Todo) => todoService.createToDo(todo),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]})

        }
    },)
}

export const useDeleteTodoMutation = () => {
    const useClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => todoService.deleteTodo(id),
        onSuccess: () => {
            useClient.invalidateQueries({
                queryKey: ["todos"]
            })
        }
    })
}
export const useUpdateTodoMutation = () => {
    const useClient = useQueryClient();

    return useMutation({
        mutationFn: (todo: Todo) => todoService.updateTodo(todo),
        onSuccess: (res) => {

            const updatedTodo = res.data;

            useClient.setQueryData(
                ["todos"],
                (oldData: Array<Todo>) => {
                    // const newState = [...oldData];

                    let newState = oldData.map((item: Todo) => {
                        if (item.id == updatedTodo.id) {
                            return item = updatedTodo;
                        }

                        return item;
                    })

                    return newState;
                }
            );
            // useClient.invalidateQueries({
            //     queryKey: ["todos"]
            // })
        }
    })
}




export const useUpdateTodoIsCompletedMutation = () => {
    const useClient = useQueryClient();

    return useMutation({
        mutationFn: (todo: Todo) => todoService.updateTodo(todo),
        onSuccess: (res) => {
            const updatedTodo = res.data;

            useClient.setQueryData(
                ["todos"],
                (oldData: Array<Todo>) => {
                    let newState = oldData.map((todo) => {
                        if (todo.id == updatedTodo.id) {
                            return {...todo, isCompleted: updatedTodo.isCompleted};
                        }
                        return todo;
                    })

                    return newState;
                }
            );

        }
    })
}


