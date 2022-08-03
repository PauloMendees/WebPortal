import { setCookie } from "nookies";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/most/useAuth";
import useContentExtraction from "../../../../hooks/most/useContentExtraction";
import { AuthPayload } from "../../../../service/mostQI/types";
import { StepOne } from "../Steps/StepOne";
import { StepTwo } from "../Steps/StepTwo";

export default function useAddClientForm() {
  const [lifeProof, setLifeProof] = useState<File>();
  const [actualStep, setActualStep] = useState<number>(0);
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [rg, setRg] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');

  const { mutateAsync: authenticate, isLoading: authenticateLoading, reset: resetAuth } =
    useAuth();
  const { mutateAsync: getContentData, isLoading: contentLoading, reset: resetContent } =
    useContentExtraction();

  function handleLifeProof(file: File) {
    setLifeProof(file);
  }

  async function onUploadDocument(document: File) {
    const mostAuthPayload: AuthPayload = {
      token: `${process.env.NEXT_PUBLIC_MOST_KEY}`,
    };

    await authenticate(mostAuthPayload, {
      onSuccess: async (res) => {
        await setCookie(undefined, "mostqi-token", res.data.token)
        if(document){
          const documentFormData = new FormData()
          //@ts-ignore
          documentFormData.append('file', document, document?.name)
          await getContentData(documentFormData, {
            onSuccess: (res) => {
              setShowInputs(true)
              setName(res.data.result[0].fields[1].value)
              setRg(res.data.result[0].fields[9].value)
              setBirthDate(res.data.result[0].fields[3].value)
            }
          })
        }
      },
    });
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
    />,
    <StepTwo key={2} handleDocument={handleLifeProof} />,
  ];

  return {
      onUploadDocument,
      steps,
      actualStep,
      name,
      rg,
      birthDate
    };
}
