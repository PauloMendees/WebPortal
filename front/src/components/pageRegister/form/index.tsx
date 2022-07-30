import * as React from "react";
import ArrowRightIcon from "../../../assets/icons/ArrowRight";
import { Button } from "../../shared/Button";
import SnackBar from "../../shared/SnackBar";
import { When } from "../../shared/When";
import useFormRegister from "./hooks/useFormRegister";

export function FormRegister() {
  const {
    actualStep,
    stepsElements,
    handleGoBack,
    handleSubmit,
    isLoadingStartRegister,
    isLoadingCodeVerify,
    isLoadingFinalizeRegister,
    errorMessage,
    clearState
  } = useFormRegister();

  return (
    <form
      className="w-[80%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[22%] flex flex-col items-end gap-5"
      onSubmit={handleSubmit}
    >
      <SnackBar
        message={errorMessage}
        severity="error"
        clearState={clearState}
      />
      {stepsElements[actualStep]}
      <When value={actualStep !== 3}>
        <div className="w-full flex items-center justify-between">
          <Button
            onClick={() => {
              handleGoBack();
            }}
            className="border-none px-0 py-0"
            isOutlined
          >{`Voltar`}</Button>
          <Button
            isLoading={isLoadingStartRegister || isLoadingCodeVerify || isLoadingFinalizeRegister}
            type="submit"
          >
            {`Avançar`}
            <ArrowRightIcon />
          </Button>
        </div>
      </When>
    </form>
  );
}
