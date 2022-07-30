import { useMutation } from "@tanstack/react-query";
import {registerService} from "../../service/register";
import { CodeVerifyPayload } from "../../service/register/types";

function handleMutate(payload: CodeVerifyPayload){
    return registerService()
        .codeVerify(payload)
}

export default function useCodeVerify(){
    return useMutation(handleMutate)
}