import * as React from "react";
import EyeCloseIcon from "../../../../../assets/icons/EyeClose";
import EyeOpenIcon from "../../../../../assets/icons/EyeOpen";
import LockIcon from "../../../../../assets/icons/Lock";
import { Input } from "../../../../shared/Input";
import useStepThree from "./hooks/useStepThree";

export function StepThree() {
  const { handleShowPassword, showPassword, handleShowPasswordConfirm, showPasswordConfirm } = useStepThree();

  return (
    <>
      <Input
        isRequired
        onLeftIcon={<LockIcon />}
        onRightIcon={showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
        handleRightIconClick={handleShowPassword}
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        id="senhaRegisterInput"
      />
      <Input
        isRequired
        onLeftIcon={<LockIcon />}
        onRightIcon={showPasswordConfirm ? <EyeOpenIcon /> : <EyeCloseIcon />}
        handleRightIconClick={handleShowPasswordConfirm}
        type={showPasswordConfirm ? "text" : "password"}
        placeholder="Confirmar Senha"
        id="confirmarSenhaRegisterInput"
      />
    </>
  );
}
