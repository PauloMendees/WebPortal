import { apiRoutes } from "../../config/apiRoutes"
import api from "../handleApi"
import { middleware } from "../middleware"
import { PayloadPostClient } from "./types"

export function clientsService(){
    const { clients } = apiRoutes
    const authAPI = middleware(api)

    async function registerClient(payload: PayloadPostClient){
        return await authAPI.post(clients.register, payload).then((res) => res);
    }

    async function listClients(){
        return await authAPI.get(clients.list).then((res) => res);
    }

    return {registerClient, listClients}
}