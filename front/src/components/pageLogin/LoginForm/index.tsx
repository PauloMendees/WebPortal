import { useRouter } from "next/router";
import * as React from "react";
import ArrowRightIcon from "../../../assets/icons/ArrowRight";
import EyeCloseIcon from "../../../assets/icons/EyeClose";
import EyeOpenIcon from "../../../assets/icons/EyeOpen";
import LockIcon from "../../../assets/icons/Lock";
import ProfileIcon from "../../../assets/icons/Profile";
import { Button } from "../../shared/Button";
import { Input } from "../../shared/Input";
import useLoginForm from "./hooks/useLoginForm";

export function LoginForm() {
    const { handleShowPassword, showPassword } = useLoginForm()
  const router = useRouter()

  return (
    <form className="w-[80%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[22%] flex flex-col gap-5 items-end">
      <Input
        isRequired
        placeholder="Email"
        onLeftIcon={<ProfileIcon />}
        type="text"
        id="emailInput"
        className="w-full"
      />
      <Input
        isRequired
        onLeftIcon={<LockIcon />}
        onRightIcon={showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
        handleRightIconClick={handleShowPassword}
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        />
        <div className="text-xs opacity-80 w-full flex justify-between items-center">
            <a className="cursor-pointer" onClick={() => { router.push('/register') }}>{`Cadastre-se`}</a>
            <a className="cursor-pointer">{`Esqueci minha senha`}</a>
        </div>
        <Button type="submit" className="">
            {`Login`}
            <ArrowRightIcon />
        </Button>
    </form>
  );
}
