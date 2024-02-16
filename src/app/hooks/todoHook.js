import { useQuery } from "@tanstack/react-query";
import { axios } from "axios";
import todoService from '../services/todoService'

export const useTodoListQuery = () =>
    useQuery({
        queryKey: ["todos"],
        queryFn: () => todoService.getToDos(),
    });



