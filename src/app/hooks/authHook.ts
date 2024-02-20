import {useMutation} from "@tanstack/react-query"
import authService from '../services/authService'
import {CreateUserInput, LoginUserInput} from "../models/auth"
import {useRouter} from "next/navigation"

export const useLoginUserMutation = () =>
    useMutation(
        {
            mutationFn: (loginInput: LoginUserInput) => authService.login(loginInput),
            onSuccess: (response) => {console.log('SUNCESS ON SIDE OF HOOK ON SCUESS', response)}
        }
    )

export const useCreateUserMutation = () => {
    const router = useRouter();


    return useMutation(
        {
            mutationFn: (createUserInput: CreateUserInput) => authService.signUp(createUserInput),
            onSuccess: (response) => {

                if (response.data) {
                    router.push('/login')
                }

            }
        }
    )
}
