import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../../../../service/context/AuthContext";
import { LoginPayload } from "../../../../service/login/types";

export default function useLoginForm(){
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { errorMessage, isAuthenticated, isLoading, signIn, clearState } = useContext(AuthContext)

    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

    async function onSubmit(e: FormEvent){
        e.preventDefault()
        const emailInput = document.getElementById('emailInput') as HTMLInputElement
        const passwordInput = document.getElementById('passwordInput') as HTMLInputElement

        const payload: LoginPayload = {
            email: emailInput.value,
            password: passwordInput.value
        }

        await signIn(payload)
    }

    return {
        showPassword,
        handleShowPassword,
        onSubmit,
        isLoading,
        errorMessage,
        clearState
    }
}