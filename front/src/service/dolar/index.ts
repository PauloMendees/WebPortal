import { apiRoutes } from "../../config/apiRoutes"
import api from "../handleApi"
import { middleware } from "../middleware"
import { DolarData } from "./types"

export function dolarService(){
    const { dolar } = apiRoutes
    const authApi = middleware(api)

    async function getAll(){
        return await authApi.get<DolarData[]>(dolar.getAll).then((res) => res);
    }

    async function getMax(){
        return await authApi.get<DolarData>(dolar.getMax).then((res) => res);
    }

    async function getMin(){
        return await authApi.get<DolarData>(dolar.getMin).then((res) => res)
    }

    async function getMedia(){
        return await authApi.get<DolarData>(dolar.getMedia).then((res) => res)
    }

    return {getAll, getMax, getMin, getMedia}
}