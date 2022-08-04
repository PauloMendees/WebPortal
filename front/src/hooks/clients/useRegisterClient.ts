import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clientsService } from "../../service/clients";
import { PayloadPostClient } from "../../service/clients/types";

function handleMutate(payload: PayloadPostClient){
    return clientsService()
        .registerClient(payload)
        .then((res) => res);
}

export default function useRegisterClient(){
    const queryClient = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(["clients-list"]) 
        }
    })
}