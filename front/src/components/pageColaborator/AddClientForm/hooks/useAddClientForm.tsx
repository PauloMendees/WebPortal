import { useState } from "react"
import { StepOne } from "../Steps/StepOne"
import { StepTwo } from "../Steps/StepTwo"

export default function useAddClientForm(){
    const [document, setDocument] = useState<File>()
    const [lifeProof, setLifeProof] = useState<File>()
    const [actualStep, setActualStep] = useState<number>(0)

    function handleDocument(file: File){
        setDocument(file)
    }

    function handleLifeProof(file: File){
        setLifeProof(file)
    }

    const steps = [
        <StepOne key={1} handleDocument={handleDocument} />,
        <StepTwo key={2} handleDocument={handleLifeProof} />
    ]

    return {handleDocument, steps, actualStep}
}