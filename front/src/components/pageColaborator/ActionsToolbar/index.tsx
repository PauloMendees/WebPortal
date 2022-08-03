import React from "react";
import PlusIcon from "../../../assets/icons/Plus";
import SearchIcon from "../../../assets/icons/Search";
import { Button } from "../../shared/Button";
import { SearchAnimated } from "../../shared/SearchAnimated";
import { H3 } from "../../shared/Texts";

type ActionsToolbarProps = {
  handleOpenClientForm: () => void
}

export function ActionsToolbar({ handleOpenClientForm }: ActionsToolbarProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <H3 className="text-primary-white font-semibold">{`Colaborador`}</H3>
      <div className="flex gap-10 items-center ">
        <SearchAnimated />
        <Button onClick={handleOpenClientForm}>
          <PlusIcon />
          {`Adicionar cliente`}
        </Button>
      </div>
    </div>
  );
}
