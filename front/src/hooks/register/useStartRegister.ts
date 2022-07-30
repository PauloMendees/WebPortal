import { useMutation } from "@tanstack/react-query";
import {registerService} from "../../service/register";
import { StartRegisterPayload } from "../../service/register/types";

async function handleMutate(payload: StartRegisterPayload){
    return await registerService()
        .startRegister(payload)
}

export default function useStartRegister(){
    return useMutation(handleMutate)
}