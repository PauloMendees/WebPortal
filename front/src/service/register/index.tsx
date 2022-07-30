import { apiRoutes } from "../../config/apiRoutes"
import api from "../handleApi"
import { middleware } from "./middleware"
import { CodeVerifyPayload, FinalizeRegisterPayload, StartRegisterPayload } from "./types"

export function registerService(){
    const { register } = apiRoutes

    async function startRegister(payload: StartRegisterPayload){
        return await api.post(register.start, payload).then((res) => res)
    }

    async function codeVerify(payload: CodeVerifyPayload){
        return await api.post(register.codeVerify, payload).then((res) => res)
    }

    async function finalizeRegister(payload: FinalizeRegisterPayload){
        return await middleware(api).post(register.finalize, payload).then((res) => res)
    }

    return { startRegister, codeVerify, finalizeRegister }
}