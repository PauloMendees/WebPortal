import { useQuery } from "@tanstack/react-query";
import { dolarService } from "../../service/dolar";

function getMinQuery(){
    return dolarService()
        .getMin()
}

export default function useGetMin(){
    const query = useQuery(['dolarMin'], getMinQuery)

    return query;
}