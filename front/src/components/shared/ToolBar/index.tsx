import { parseCookies } from "nookies";
import React from "react";
import MenuIcon from "../../../assets/icons/Menu";
import { H2, H4 } from "../Texts";

export default function ToolBar() {
  const { "web-portal-user-email": userEmail } = parseCookies();

  return (
    <div className="w-full items-center flex px-14 py-6 justify-between bg-backgroundColor">
      <H2 className="text-primary-white font-bold">{`WebPortal`}</H2>
      <div className="flex gap-8 items-center">
        <H4 className="text-primary-white">{userEmail}</H4>
        <div className="cursor-pointer p-3 rounded-full hover:bg-primary-pink bg-opacity-10 duration-200">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}
