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


