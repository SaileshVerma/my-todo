// import {cookies} from "next/headers";
import {Todo} from "../models/todo";
import Cookies from 'js-cookie';

const {default: axios} = require("axios");

class ToDoService {
    async getToDos() {
        // const token = localStorage.getItem('token')

        const token = Cookies.get('token');

        let headers = {
            'Authorization': `Bearer ${token}`
        }

        let response = await axios
            .get("http://localhost:4002/tasks", {
                headers
            })

        let toDosParsedList = JSON.parse(JSON.stringify(response.data));

        return toDosParsedList ?? [];

    }


    async createToDo(todo: Todo) {
        const createTaskDto = {
            title: todo.title,
            desc: todo.desc,
            isCompleted: false
        };

        // const token = localStorage.getItem('token')

        // const token = cookieStore.get('token')?.value ?? '';
        const token = Cookies.get('token');

        const options = {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };
        let response = await axios
            .post("http://localhost:4002/tasks", createTaskDto, options)

        let responsedTodoItem = JSON.parse(JSON.stringify(response.data));

        return responsedTodoItem;
    }


    async deleteTodo(id: string) {
        // const token = localStorage.getItem('token')
        // const cookieStore = cookies();
        // const token = cookieStore.get('token')?.value ?? '';
        const token = Cookies.get('token');

        const options = {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };
        await axios
            .post(`http://localhost:4002/tasks/${id}`, {}, options)
    }

    async updateTodo(todo: Todo) {
        // const token = localStorage.getItem('token')
        // const cookieStore = cookies();
        // const token = cookieStore.get('token')?.value ?? '';
        const token = Cookies.get('token');


        const options = {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        }
        let response = await axios.put(`http://localhost:4002/tasks/${todo.id}`, todo, options);

        return response;
    }
}


export default new ToDoService();