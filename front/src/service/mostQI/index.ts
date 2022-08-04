import { apiRoutes } from "../../config/apiRoutes"
import api from "./handleMostApi"
import { middleware } from "./middleware"
import { AuthPayload, AuthResponse } from "./types"

export function mostQIService(){
    const authApi = middleware(api)
    const {most} = apiRoutes

    async function auth(payload: AuthPayload){
        return await api.post<AuthResponse>(most.auth, payload).then((res) => res)
    }

    async function contentExtraction(payload: FormData){
        return await authApi.post(most.contentExtraction, payload).then((res) => res)
    }

    async function liveness(payload: FormData){
        return await authApi.post(most.liveness, payload).then((res) => res)
    }

    async function faceCompare(payload: FormData){
        return await authApi.post(most.faceCompare, payload).then((res) => res)
    }

    return { auth, contentExtraction, liveness, faceCompare }
}