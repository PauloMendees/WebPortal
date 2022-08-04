import { LinearProgress } from "@mui/material";
import React from "react";
import { Input } from "../../../../shared/Input";
import SnackBar from "../../../../shared/SnackBar";
import UploadZone from "../../../../shared/UploadZone";
import { When } from "../../../../shared/When";

type StepOneProps = {
  handleDocument: (file: File) => void;
  showInputs: boolean;
  loadingInfos: boolean;
  name: string
  rg: string
  date: string
  errorMessage: string
  clearState: () => void
};

export function StepOne({ handleDocument, showInputs, loadingInfos, date, name, rg, errorMessage, clearState }: StepOneProps) {
  return (
    <>
      <SnackBar
        message={errorMessage}
        severity="error"
        clearState={clearState}
      />
      <div className="w-full flex flex-col gap-2">
        <label className={`mb-1 text-primary-white text-base`}>
          {`Documento com foto`}
        </label>
        <UploadZone
          handleUploadedFile={handleDocument}
          accept={{
            "image/jpeg": [],
            "image/png": [],
          }}
        />
      </div>
      <When value={loadingInfos}>
        <LinearProgress color="primary" sx={{width: '100%'}} />
      </When>
      <When value={showInputs}>
        <div className="w-[30%]">
          <Input
            value={name}
            className="w-full"
            required
            label="Nome:"
            placeholder="Paulo Mendes"
            id="nameInput"
            readOnly
          />
        </div>
        <div className="w-[30%]">
          <Input
            value={rg}
            className="w-full"
            required
            label="RG:"
            placeholder="9878789"
            readOnly
            id="rgInput"
          />
        </div>
        <div className="w-[30%]">
          <Input
            value={date}
            className="w-full"
            required
            label="Data de nascimento:"
            readOnly
            id="dateInput"
            placeholder="Data de nascimento"
          />
        </div>
      </When>
    </>
  );
}
