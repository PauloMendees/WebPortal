import { useQuery } from "@tanstack/react-query";
import { dolarService } from "../../service/dolar";

function listDolarQuery(){
    return dolarService()
        .getAll()
}

export default function useListDolar(){
    const query = useQuery(['dolarList'], listDolarQuery)

    return query;
}