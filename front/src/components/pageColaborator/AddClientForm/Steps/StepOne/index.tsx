import React from "react";
import { Input } from "../../../../shared/Input";
import UploadZone from "../../../../shared/UploadZone";

type StepOneProps = {
  handleDocument: (file: File) => void;
};

export function StepOne({ handleDocument }: StepOneProps) {
  return (
    <>
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
      <div className="w-[30%]">
        <Input
          className="w-full"
          required
          label="Nome:"
          placeholder="Paulo Mendes"
          id="nameInput"
        />
      </div>
      <div className="w-[30%]">
        <Input
          className="w-full"
          required
          label="RG:"
          placeholder="9878789"
          id="nameInput"
        />
      </div>
      <div className="w-[30%]">
        <Input
          className="w-full"
          required
          label="Data de nascimento:"
          id="nameInput"
          type={"date"}
        />
      </div>
    </>
  );
}
