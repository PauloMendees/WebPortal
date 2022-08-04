import React from "react";
import ArrowRightIcon from "../../../assets/icons/ArrowRight";
import { Button } from "../../shared/Button";
import { Input } from "../../shared/Input";
import SnackBar from "../../shared/SnackBar";
import { H3 } from "../../shared/Texts";
import UploadZone from "../../shared/UploadZone";
import { When } from "../../shared/When";
import useAddClientForm from "./hooks/useAddClientForm";

type AddClientFormProps = {
  open: boolean;
  handleOpen: () => void;
};

export function AddClientForm(props: AddClientFormProps) {
  const { handleOpen, open } = props;
  const {
    actualStep,
    steps,
    onSubmit,
    clearState,
    loadingFinalPost,
    successMessage,
    errorMessage,
  } = useAddClientForm();

  return (
    <When value={open}>
      <SnackBar
        message={successMessage}
        severity="success"
        clearState={clearState}
      />
      <SnackBar
        message={errorMessage}
        severity="error"
        clearState={clearState}
      />
      <div className="bg-grayscale-900 w-full rounded-xl py-5 px-6 flex flex-col gap-8">
        <H3>{`Cadastrar cliente`}</H3>
        <form
          className="w-full flex justify-between items-center gap-8 flex-wrap"
          onSubmit={onSubmit}
        >
          {steps[actualStep]}
          <div className="w-full flex items-center justify-end gap-5">
            <Button
              isOutlined
              onClick={() => {
                handleOpen();
                clearState();
              }}
            >
              {`Cancelar`}
            </Button>
            <Button type="submit" isLoading={loadingFinalPost}>
              {`Avançar`}
              <ArrowRightIcon />
            </Button>
          </div>
        </form>
      </div>
    </When>
  );
}
