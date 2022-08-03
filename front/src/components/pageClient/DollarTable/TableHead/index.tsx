import React from "react";

export function TableHead() {
  return (
    <thead>
      <tr className="flex items-center h-auto w-full px-3">
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-start w-[35%] min-w-[10rem]">
          {`Id`}
        </th>
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-start min-w-[2rem]">
          {`Valor`}
        </th>
        <th className="md:text-base xl:text-lg 2xl:text-xl font-medium text-primary-white flex justify-end w-full">
          {`Data referente`}
        </th>
      </tr>
    </thead>
  );
}
