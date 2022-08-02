import React from "react";
import PlusIcon from "../../../assets/icons/Plus";
import SearchIcon from "../../../assets/icons/Search";
import { Button } from "../../shared/Button";
import { H3 } from "../../shared/Texts";
import useActionToolbar from "./hooks/useActionToolbar";

type ActionsToolbarProps = {
  handleOpenClientForm: () => void
}

export function ActionsToolbar({ handleOpenClientForm }: ActionsToolbarProps) {
  const { handleSearch, openSearch, handleSearchColor, searchColor } = useActionToolbar()

  return (
    <div className="w-full flex justify-between items-center">
      <H3 className="text-primary-white font-semibold">{`Colaborador`}</H3>
      <div className="flex gap-10 items-center ">
        <div className={`flex gap-2 items-center border-white rounded-2xl px-4 py-2 ${openSearch ? `border-[1px]` : ``} duration-200 `}>
          <button
            onClick={handleSearch}
            onPointerEnter={() => {
              handleSearchColor("#e708ee")
            }}
            onPointerLeave={() => {
              handleSearchColor("#fff")
            }}
          >
            <SearchIcon fill={searchColor} />
          </button>
          <input
            id="searchInput"
            className={`bg-transparent text-primary-white ${openSearch ? `w-[300px]` : `w-0`} duration-200 outline-none`}
          />
        </div>
        <Button onClick={handleOpenClientForm}>
          <PlusIcon />
          {`Adicionar cliente`}
        </Button>
      </div>
    </div>
  );
}
