import { useQuery } from "@tanstack/react-query";
import { clientsService } from "../../service/clients";

function listClientQuery(){
    return clientsService()
        .listClients()
        .then((res) => res)
}

export default function useListClient(){
    const query = useQuery(['clients-list'], listClientQuery)

    return query
}