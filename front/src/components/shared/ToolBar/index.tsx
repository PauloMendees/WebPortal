import React from "react";
import MenuIcon from "../../../assets/icons/Menu";
import { H2 } from "../Texts";

export default function ToolBar() {

  return (
    <div className="w-full items-center flex px-14 py-6 justify-between bg-backgroundColor">
      <H2 className="text-primary-white font-bold">{`WebPortal`}</H2>
      <div className="flex gap-8 items-center">
        <div className="cursor-pointer p-2 rounded-full hover:bg-primary-pink bg-opacity-10 duration-200">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}
