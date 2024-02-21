import {useMutation} from "@tanstack/react-query"
import authService from '../services/authService'
import {CreateUserInput, LoginUserInput} from "../models/auth"
import {useRouter} from "next/navigation"

export const useLoginUserMutation = () => {
    const router = useRouter();
    return useMutation(
        {
            mutationFn: (loginInput: LoginUserInput) => authService.login(loginInput),
            onSuccess: (response) => {

                if (response.access_token) {
                    console.log("response  ---------->", response);
                    const token = response['access_token'];

                    //set the token to the local storage
                    localStorage.setItem('token', token);

                    router.push('/')
                }
            }
        }
    )
}

export const useCreateUserMutation = () => {
    const router = useRouter();


    return useMutation(
        {
            mutationFn: (createUserInput: CreateUserInput) => authService.signUp(createUserInput),
            onSuccess: (response) => {

                if (response) {

                    router.push('/login')
                }

            }
        }
    )
}
