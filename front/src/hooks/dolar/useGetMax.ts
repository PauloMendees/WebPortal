import { useQuery } from "@tanstack/react-query";
import { dolarService } from "../../service/dolar";

function getMaxQuery(){
    return dolarService()
        .getMax()
}

export default function useGetMax(){
    const query = useQuery(['dolarMax'], getMaxQuery)

    return query;
}