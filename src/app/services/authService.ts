import axios from "axios";
import {CreateUserInput, LoginUserInput} from "../models/auth";

class AuthService {


    async signUp(userInput: CreateUserInput) {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        console.log("REACHED HERE----------------------------------->")

        let response = await axios.post('http://localhost:4002/signUp', {...userInput}, options);

        console.log("HERE IN THE AUTH SERVICE SIGN UP : ", response.data);
        return response.data;
    }


    async login(userInput: LoginUserInput) {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        let response = await axios.post('http://localhost:4002/login', {...userInput}, options);

        console.log("HERE IN THE AUTH SIGN LOGIN SERVICE : ", response.data);
        return response.data;
    }

}

export default new AuthService();