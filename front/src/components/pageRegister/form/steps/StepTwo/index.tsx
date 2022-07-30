import * as React from "react";
import { Input } from "../../../../shared/Input";

export function StepTwo() {
  return (
    <>
      <Input
        isRequired
        placeholder="Código"
        type="text"
        id="codeInputRegister"
        className="w-full"
      />
      <span className="w-full text-primary-white text-xs">{`Enviamos um código de 06 dígitos para o seu email.`}</span>
    </>
  );
}
