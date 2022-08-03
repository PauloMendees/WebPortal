import { useMutation } from "@tanstack/react-query";
import { mostQIService } from "../../service/mostQI";

function handleMutate(payload: FormData){
    return mostQIService()
        .faceCompare(payload)
        .then((res) => res)
}

export default function useFaceCompare(){
    return useMutation(handleMutate)
}