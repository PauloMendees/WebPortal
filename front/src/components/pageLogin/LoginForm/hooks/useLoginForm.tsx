import { useState } from "react"

export default function useLoginForm(){
    const [showPassword, setShowPassword] = useState<boolean>(false);

    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

    return {
        showPassword,
        handleShowPassword
    }
}