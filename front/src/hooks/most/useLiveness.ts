import { useMutation } from "@tanstack/react-query";
import { mostQIService } from "../../service/mostQI";

function handleMutate(payload: FormData){
    return mostQIService()
        .liveness(payload)
        .then((res) => res)
}

export default function useLiveness(){
    return useMutation(handleMutate)
}