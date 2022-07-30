import * as React from "react";
import ProfileIcon from "../../../../../assets/icons/Profile";
import { Input } from "../../../../shared/Input";

export function StepOne() {
  return (
    <Input
      isRequired
      placeholder="Email"
      onLeftIcon={<ProfileIcon />}
      type="email"
      id="emailInputRegister"
      className="w-full"
    />
  );
}
