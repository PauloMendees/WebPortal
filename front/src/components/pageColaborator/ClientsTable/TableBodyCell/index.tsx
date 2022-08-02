import React from "react";

export function TableBodyCell() {
  return (
    <tr className="flex gap-6 items-center h-8 w-full bg-grayscale-800 rounded-lg px-3 py-5">
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[20%] min-w-[10rem]">
        {`teste@teste.com.br`}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[20%] min-w-[10rem]">
        {`Nome`}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[12%] min-w-[6rem]">
        {`Aniversário`}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[15%] min-w-[10rem]">
        {`Cadastrado por`}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-end w-[30%] min-w-[10rem]">
        {`Data de cadastro`}
      </th>
    </tr>
  );
}
