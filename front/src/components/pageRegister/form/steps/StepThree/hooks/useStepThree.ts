import { useState } from "react"

export default function useStepThree(){
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false)

    function handleShowPassword(){
        setShowPassword(!showPassword)
    }

    function handleShowPasswordConfirm(){
        setShowPasswordConfirm(!showPasswordConfirm)
    }

    return {showPassword, handleShowPassword, showPasswordConfirm, handleShowPasswordConfirm}
}