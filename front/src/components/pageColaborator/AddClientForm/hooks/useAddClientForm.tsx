import { parseCookies, setCookie } from "nookies";
import { FormEvent, useEffect, useState } from "react";
import useRegisterClient from "../../../../hooks/clients/useRegisterClient";
import useAuth from "../../../../hooks/most/useAuth";
import useContentExtraction from "../../../../hooks/most/useContentExtraction";
import useFaceCompare from "../../../../hooks/most/useFaceCompare";
import useLiveness from "../../../../hooks/most/useLiveness";
import { PayloadPostClient } from "../../../../service/clients/types";
import { AuthPayload } from "../../../../service/mostQI/types";
import { dataURLtoFile } from "../../../../utils/dataURLtoFile";
import { StepOne } from "../Steps/StepOne";
import { StepThree } from "../Steps/StepThree";
import { StepTwo } from "../Steps/StepTwo";

const fs   = require('web-fs')

export default function useAddClientForm() {
  const [actualStep, setActualStep] = useState<number>(0);
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("")

  const [name, setName] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [validDocument, setValidDocument] = useState<File>()
  const [validFrontalImage, setValidFrontalImage] = useState<File>()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleEmail(e: any){
    setEmail(e.target.value)
  }

  function handlePassword(e: any){
    setPassword(e.target.value)
  }

  const {
    mutateAsync: authenticate,
    isLoading: authenticateLoading,
    reset: resetAuth,
  } = useAuth();

  const {
    mutateAsync: getContentData,
    isLoading: contentLoading,
    reset: resetContent,
  } = useContentExtraction();

  const {
    mutateAsync: livenessDetection,
    isLoading: livenessIsLoading,
    reset: resetLiveness
  } = useLiveness()

  const {
    mutateAsync: faceCompare,
    isLoading: faceCompareLoading,
    reset: resetFaceCompare
  } = useFaceCompare()

  const {
    mutateAsync: postClient,
    isLoading: loadingFinalPost,
    reset: resetPost
  } = useRegisterClient()

  function clearState() {
    setErrorMessage("");
    setName("");
    setRg("");
    setBirthDate("");
    setShowInputs(false);
    resetContent();
    resetAuth();
    resetLiveness();
    resetFaceCompare();
    setActualStep(0)
    setEmail('')
    setPassword('')
    resetPost()
    setSuccessMessage("")
  }

  const mostAuthPayload: AuthPayload = {
    token: `${process.env.NEXT_PUBLIC_MOST_KEY}`,
  };

  async function onUploadDocument(document: File) {
    await authenticate(mostAuthPayload, {
      onSuccess: async (res) => {
        await setCookie(undefined, "mostqi-token", res.data.token);
        if (document) {
          setValidDocument(document)
          const documentFormData = new FormData();
          //@ts-ignore
          documentFormData.append("file", document, document?.name);
          await getContentData(documentFormData, {
            onSuccess: (res) => {
              if (res.data.result[0]) {
                setShowInputs(true);
                setName(res.data.result[0].fields[1].value);
                setRg(res.data.result[0].fields[9].value);
                setBirthDate(res.data.result[0].fields[3].value);
              } else {
                setErrorMessage("Imagem inválida.");
              }
            },
            onError: (e) => {
              //@ts-ignore
              setErrorMessage(e?.response.data.status.message);
              setShowInputs(false);
              setName("");
              setRg("");
              setBirthDate("");
            },
          });
        }
      },
    });
  }

  async function onUploadLifeProof(lifeProof: File) {
    await authenticate(mostAuthPayload, {
      onSuccess: async (res) => {
        await setCookie(undefined, "mostqi-token", res.data.token);
        if (lifeProof) {
          const lifeProofFormData = new FormData();
          //@ts-ignore
          lifeProofFormData.append("file", lifeProof, lifeProof?.name);
          await livenessDetection(lifeProofFormData, {
            onSuccess: async (res) => {
              if (!res.data.result) {
                setErrorMessage("Video inválido.")
              }
              if (res.data.result.livenessScore === 1) {
                const faceCompareFormData = new FormData()
                //@ts-ignore
                faceCompareFormData.append("faceFileA", validDocument, validDocument.name)
                const fileFrontalImage = await dataURLtoFile(`data:image/png;base64,${res.data.result.frontalImage}`, "frontalImage")
                setValidFrontalImage(fileFrontalImage)
                //@ts-ignore
                faceCompareFormData.append("faceFileB", fileFrontalImage, "faceFrontal")

                await authenticate(mostAuthPayload, {
                  onSuccess: async (res) => {
                    await setCookie(undefined, "mostqi-token", res.data.token);
                    await faceCompare(faceCompareFormData, {
                      onSuccess: (res) => {
                        if(res.data.status.message === "Ok"){
                          setActualStep(actualStep+1)
                        } else {
                          setErrorMessage("Rosto do vídeo não corresponde ao do documento.")
                        }
                      },
                      onError: (e) => {
                        //@ts-ignore
                        setErrorMessage(e?.response.data.status.errors[0].message);
                      },
                    })
                  }
                })
              } else {
                setErrorMessage("Prova de vida não validada.")
              }
            },
            onError: (e) => {
              //@ts-ignore
              setErrorMessage(e?.response.data.status.errors[0].message);
            },
          })
        }
      },
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (actualStep === 0) {
      if (name && rg && birthDate) {
        setActualStep(actualStep + 1);
      }
    } else {
      const documentBase64 = validDocument?.toString();
      const frontalImageBase64 = validFrontalImage?.toString();
      const { 'web-portal-user-email': savedEmail } = await parseCookies()
      if(!documentBase64 || !frontalImageBase64) return

      const payload: PayloadPostClient = {
        birthDate: birthDate,
        createdByEmail: savedEmail,
        document: documentBase64,
        email: email,
        password: password,
        nome: name,
        rg: rg,
        selfie: frontalImageBase64
      }

      await postClient(payload, {
        onSuccess: (res) => {
          setSuccessMessage(res.data.message)
        },
        onError: (e) => {
          //@ts-ignore
          setErrorMessage(e?.response.data.message);
        }
      })
    }
  }

  const steps = [
    <StepOne
      key={1}
      handleDocument={onUploadDocument}
      showInputs={showInputs}
      loadingInfos={contentLoading || authenticateLoading}
      name={name}
      rg={rg}
      date={birthDate}
      errorMessage={errorMessage}
      clearState={clearState}
    />,
    <StepTwo
      key={2}
      handleDocument={onUploadLifeProof}
      errorMessage={errorMessage}
      clearState={clearState}
      isLoading={livenessIsLoading || faceCompareLoading}
    />,
    <StepThree
      clearState={clearState}
      email={email}
      errorMessage={errorMessage}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      password={password}
      key={3}
    />
  ];

  return {
    onUploadDocument,
    steps,
    actualStep,
    name,
    rg,
    birthDate,
    errorMessage,
    onSubmit,
    clearState,
    successMessage,
    loadingFinalPost
  };
}
