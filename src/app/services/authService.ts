import axios from "axios";
import {CreateUserInput, LoginUserInput} from "../models/auth";
import Cookies from 'js-cookie';

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

    async me() {
        // const token = localStorage.getItem('token')

        // const cookieStore = cookies();
        const token = Cookies.get('token')

        const options = {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        let response = await axios.get('http://localhost:4002/user', options);

        console.log("HERE IN THE AUTH SIGN LOGIN SERVICE : ", response.data);
        return response.data;
    }

}

export default new AuthService();