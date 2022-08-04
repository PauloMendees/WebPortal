import React from "react";
import { Client } from "../../../../service/clients/types";

type TableBodyCellProps = {
  data: Client
}

export function TableBodyCell({data}: TableBodyCellProps) {
  return (
    <tr className="flex gap-6 items-center h-8 w-full bg-grayscale-800 rounded-lg px-3 py-5">
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[20%] min-w-[10rem]">
        {data.email}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[20%] min-w-[10rem]">
        {data.nome}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[15%] min-w-[6rem]">
        {data.birthDate}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[15%] min-w-[10rem]">
        {data.createdBy_email}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-end w-[30%] min-w-[10rem]">
        {data.createdAt}
      </th>
    </tr>
  );
}
