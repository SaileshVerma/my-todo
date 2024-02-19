import {Todo} from "../models/todo";

const {default: axios} = require("axios");

class ToDoService {
    async getToDos() {
        let response = await axios
            .get("http://localhost:4002/tasks")

        let toDosParsedList = JSON.parse(JSON.stringify(response.data));

        return toDosParsedList ?? [];

    }


    async createToDo(todo: Todo) {
        const createTaskDto = {
            title: todo.title,
            desc: todo.desc,
            isCompleted: false
        };

        const options = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let response = await axios
            .post("http://localhost:4002/tasks", createTaskDto, options)

        let responsedTodoItem = JSON.parse(JSON.stringify(response.data));

        return responsedTodoItem;
    }


    async deleteTodo(id: string) {
        await axios
            .post(`http://localhost:4002/tasks/${id}`)
    }
}


export default new ToDoService();