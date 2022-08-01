import React from "react";
import PlusIcon from "../../../assets/icons/Plus";
import { Button } from "../../shared/Button";
import { H3 } from "../../shared/Texts";

export function ActionsToolbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <H3 className="text-primary-white font-semibold">{`Colaborador`}</H3>
      <Button>
        <PlusIcon />
        {`Adicionar cliente`}
      </Button>
    </div>
  );
}
