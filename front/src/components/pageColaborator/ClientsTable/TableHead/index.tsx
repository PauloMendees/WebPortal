import React from "react";

export function TableHead() {
  return (
    <thead>
      <tr className="flex gap-6 justify-between items-center h-auto w-full px-3">
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-start w-[20%] min-w-[10rem]">
          {`Email`}
        </th>
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-start w-[20%] min-w-[10rem]">
          {`Nome`}
        </th>
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-start w-[15%] min-w-[6rem]">
          {`Aniversário`}
        </th>
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-start w-[15%] min-w-[10rem]">
          {`Cadastrado por`}
        </th>
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-end w-[30%] min-w-[10rem]">
          {`Data de cadastro`}
        </th>
      </tr>
    </thead>
  );
}
