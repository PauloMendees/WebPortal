import { useMutation } from "@tanstack/react-query";
import {registerService} from "../../service/register";
import { FinalizeRegisterPayload } from "../../service/register/types";

function handleMutate(payload: FinalizeRegisterPayload){
    return registerService()
        .finalizeRegister(payload)
}

export default function useFinalizeRegister(){
    return useMutation(handleMutate)
}