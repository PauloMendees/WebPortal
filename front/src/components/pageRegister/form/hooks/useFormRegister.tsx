import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useCodeVerify from "../../../../hooks/register/useCodeVerify";
import useFinalizeRegister from "../../../../hooks/register/useFinalizeRegister";
import useStartRegister from "../../../../hooks/register/useStartRegister";
import {
  CodeVerifyPayload,
  FinalizeRegisterPayload,
  StartRegisterPayload,
} from "../../../../service/register/types";
import { StepOne } from "../steps/StepOne";
import { StepThree } from "../steps/StepThree";
import { StepTwo } from "../steps/StepTwo";
import { parseCookies, setCookie } from "nookies";
import { Confirmation } from "../steps/Confirmation";

export default function useFormRegister() {
  const [actualStep, setActualStep] = useState<number>(0);
  const [validEmail, setValidEmail] = useState<string>("");
  const {
    mutateAsync: startRegisterRequest,
    isLoading: isLoadingStartRegister,
    reset: resetStart,
  } = useStartRegister();

  const {
    mutateAsync: codeVerifyRequest,
    isLoading: isLoadingCodeVerify,
    reset: resetCode,
  } = useCodeVerify();

  const {
    mutateAsync: finalizeRegisterRequest,
    isLoading: isLoadingFinalizeRegister,
    reset: resetFinal,
  } = useFinalizeRegister();

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  function incrementStep() {
    setActualStep(actualStep + 1);
  }

  function decrementStep() {
    setActualStep(actualStep - 1);
  }

  function handleGoBack() {
    if (actualStep === 0) {
      router.push("/");
    } else {
      decrementStep();
    }
  }

  const stepsElements = [
    <StepOne key={1} />,
    <StepTwo key={2} />,
    <StepThree key={3} />,
    <Confirmation key={4} />,
  ];

  async function startRegister() {
    const emailInput = document.getElementById(
      "emailInputRegister"
    ) as HTMLInputElement;
    if(!emailInput) return
    const email = emailInput.value;
    const payload: StartRegisterPayload = {
      email,
    };

    await startRegisterRequest(payload, {
      onSuccess: () => {
        setValidEmail(email);
        incrementStep();
      },
      onError: (e) => {
        //@ts-ignore
        setErrorMessage(e?.response.data.message);
      },
    });
  }

  async function codeValidate() {
    const codeInput = document.getElementById(
      "codeInputRegister"
    ) as HTMLInputElement;

    if(!codeInput) return

    const code = codeInput.value;

    const payload: CodeVerifyPayload = {
      code,
      email: validEmail,
    };

    await codeVerifyRequest(payload, {
      onSuccess: (res) => {
        console.log(res);
        setCookie(undefined, "webportal-token-register", res.data.message, {
          maxAge: 60 * 60 * 3 * 1, //1 hora
        });
        incrementStep();
      },
      onError: (e) => {
        //@ts-ignore
        setErrorMessage(e?.response.data.message);
      },
    });
  }

  async function finalizeRegister() {
    const passwordInput = document.getElementById(
      "senhaRegisterInput"
    ) as HTMLInputElement;
    const passwordConfirmInput = document.getElementById(
      "confirmarSenhaRegisterInput"
    ) as HTMLInputElement;

      if(!passwordInput || !passwordConfirmInput) return

    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if (password !== passwordConfirm) {
      setErrorMessage("Senhas não batem.");
      return;
    }

    const payload: FinalizeRegisterPayload = {
      email: validEmail,
      password,
    };

    await finalizeRegisterRequest(payload, {
      onSuccess: () => {
        incrementStep();
      },
      onError: (e) => {
        //@ts-ignore
        setErrorMessage(e?.response.data.message);
      },
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (actualStep === 0) {
      await startRegister();
    } else if (actualStep === 1) {
      await codeValidate();
    } else {
      finalizeRegister();
    }
  }

  function clearState() {
    setErrorMessage("")
    resetCode()
    resetStart()
    resetFinal()
  }

  return {
    actualStep,
    incrementStep,
    decrementStep,
    stepsElements,
    handleGoBack,
    handleSubmit,
    isLoadingStartRegister,
    isLoadingCodeVerify,
    isLoadingFinalizeRegister,
    errorMessage,
    successMessage,
    clearState
  };
}
