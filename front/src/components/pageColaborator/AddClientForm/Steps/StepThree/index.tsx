import React from "react";
import { Input } from "../../../../shared/Input";
import SnackBar from "../../../../shared/SnackBar";

type StepThreeProps = {
  email: string;
  password: string;
  errorMessage: string;
  handleEmail: (ev: any) => void;
  handlePassword: (ev: any) => void;
  clearState: () => void;
};

export function StepThree({
  email,
  handleEmail,
  handlePassword,
  password,
  errorMessage,
  clearState,
}: StepThreeProps) {
  return (
    <>
      <SnackBar
        message={errorMessage}
        severity="error"
        clearState={clearState}
      />
      <div className="w-full flex items-center gap-10">
        <div className="w-[30%]">
          <Input
            value={email}
            onChange={handleEmail}
            className="w-full"
            required
            label="Email:"
            placeholder="email@email.com.br"
          />
        </div>
        <div className="w-[30%]">
          <Input
            value={password}
            onChange={handlePassword}
            className="w-full"
            required
            label="Senha:"
            placeholder="tDs2@122#.."
          />
        </div>
      </div>
    </>
  );
}
