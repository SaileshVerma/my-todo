import {useMutation, useQuery} from "@tanstack/react-query"
import authService from '../services/authService'
import {CreateUserInput, LoginUserInput} from "../models/auth"
import {redirect, useRouter} from "next/navigation"
import Cookies from 'js-cookie'
import isTokenExpired from "../helper/tokenHelper"

export const useMeQuery = () => {

    return useQuery(
        {
            queryKey: ['me'],
            queryFn: () => authService.me()


        }
    );
}


export const useLoginUserMutation = () => {
    const router = useRouter();
    return useMutation(
        {
            mutationFn: (loginInput: LoginUserInput) => authService.login(loginInput),
            onSuccess: (response) => {

                if (response.access_token) {
                    // console.log("response  ---------->", response);
                    const token = response['access_token'];

                    // //set the token to the local storage
                    // localStorage.setItem('token', token);

                    console.log('###########################    TOKEN IN OGIN ', token);
                    //here instead of the above code will be using cookie to set and get data
                    Cookies.set('token', token);
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
