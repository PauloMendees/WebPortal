import { useMutation } from "@tanstack/react-query";
import { mostQIService } from "../../service/mostQI";
import { AuthPayload } from "../../service/mostQI/types";

function handleMutate(payload: AuthPayload){
    return mostQIService()
        .auth(payload)
        .then((res) => res)
}

export default function useAuth(){
    return useMutation(handleMutate);
}