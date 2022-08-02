import React from "react";
import ArrowRightIcon from "../../../assets/icons/ArrowRight";
import { Button } from "../../shared/Button";
import { Input } from "../../shared/Input";
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
  const { actualStep, steps } = useAddClientForm()

  return (
    <When value={open}>
      <div className="bg-grayscale-900 w-full rounded-xl py-5 px-6 flex flex-col gap-4">
        <H3>{`Cadastrar cliente`}</H3>
        <form className="w-full flex justify-between items-center gap-8 flex-wrap">
          {steps[actualStep]}
        </form>
        <div className="w-full flex items-center justify-end gap-5">
              <Button
                isOutlined
                onClick={handleOpen}
              >
                {`Cancelar`}
              </Button>
              <Button type="submit">
                {`Avançar`}
                <ArrowRightIcon />
              </Button>
        </div>
      </div>
    </When>
  );
}
