import { apiRoutes } from "../../config/apiRoutes"
import api from "../handleApi"
import { LoginPayload } from "./types"

export function loginService(){
    const route = apiRoutes.login


    async function login(payload: LoginPayload){
        return await api.post(route, payload).then((res) => res)
    }

    return {login}
}