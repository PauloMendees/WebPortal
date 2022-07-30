import * as React from "react";
import { FormRegister } from "../../components/pageRegister/form";
import { H1 } from "../../components/shared/Texts";

export default function Register() {

  return (
    <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center bg-backgroundColor">
      <div className="flex font-bold">
        <H1 className="text-primary-white">{`Web-`}</H1>
        <H1 className="text-primary-pink">{`Portal`}</H1>
      </div>
      <FormRegister />
    </div>
  );
}
