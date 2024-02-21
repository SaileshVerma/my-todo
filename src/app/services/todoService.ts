import {Todo} from "../models/todo";

const {default: axios} = require("axios");

class ToDoService {
    async getToDos() {
        const token = localStorage.getItem('token')

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

        const token = localStorage.getItem('token')

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
        const token = localStorage.getItem('token')

        const options = {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };
        await axios
            .post(`http://localhost:4002/tasks/${id}`, {}, options)
    }
}


export default new ToDoService();