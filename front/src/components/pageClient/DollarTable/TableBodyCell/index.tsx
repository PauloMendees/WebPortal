import React from "react";
import { DolarData } from "../../../../service/dolar/types";

type TableBodyCellProps = {
  data: DolarData
}

export function TableBodyCell({ data }: TableBodyCellProps) {
  return (
    <tr className="flex items-center h-8 w-full bg-grayscale-800 rounded-lg px-3 py-5">
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start w-[35%] min-w-[10rem]">
        {data.id}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-start min-w-[2rem]">
        {data.value}
      </th>
      <th className="md:text-base xl:text-lg 2xl:text-lg font-normal text-primary-white flex justify-end w-full">
        {data.moment}
      </th>
    </tr>
  );
}
