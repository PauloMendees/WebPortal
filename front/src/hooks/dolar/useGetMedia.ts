import { useQuery } from "@tanstack/react-query";
import { dolarService } from "../../service/dolar";

function getMediaQuery(){
    return dolarService()
        .getMin()
}

export default function useGetMedia(){
    const query = useQuery(['dolarMedia'], getMediaQuery)

    return query;
}