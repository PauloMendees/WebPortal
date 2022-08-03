import { useMutation } from "@tanstack/react-query";
import { mostQIService } from "../../service/mostQI";

function handleMutate(payload: FormData){
    return mostQIService()
        .contentExtraction(payload)
        .then((res) => res)
}

export default function useContentExtraction(){
    return useMutation(handleMutate)
}