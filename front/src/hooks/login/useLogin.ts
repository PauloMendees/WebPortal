import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../service/login";
import { LoginPayload } from "../../service/login/types";

function handleMutate(payload: LoginPayload){
    return loginService()
        .login(payload)
}

export default function useLogin(){
    return useMutation(handleMutate)
}