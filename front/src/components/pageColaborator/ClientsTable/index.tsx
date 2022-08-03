import React from "react";
import { DividerTable } from "../../shared/DividerTable";
import { TableBodyCell } from "./TableBodyCell";
import { TableHead } from "./TableHead";

export function ClientsTable() {
  return (
    <div className="bg-grayscale-900 w-full rounded-xl py-5 px-6">
      <div className="overflow-x-auto sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-0">
        <table className="w-full">
            <TableHead />
            <tbody className="flex flex-col gap-3 mt-2">
                <DividerTable />
                <TableBodyCell />
                <TableBodyCell />
                <TableBodyCell />
                <TableBodyCell />
            </tbody>
        </table>
      </div>
    </div>
  );
}
