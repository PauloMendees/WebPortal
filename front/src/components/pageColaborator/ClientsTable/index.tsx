import { Skeleton } from "@mui/material";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useListClient from "../../../hooks/clients/useListClient";
import { Client } from "../../../service/clients/types";
import { DividerTable } from "../../shared/DividerTable";
import { When } from "../../shared/When";
import { TableBodyCell } from "./TableBodyCell";
import { TableHead } from "./TableHead";

type ClientsTableProps = {
  data: any[]
  isLoading: boolean
}

export function ClientsTable({ data, isLoading }: ClientsTableProps) {
  const router = useRouter();

  return (
    <>
      <When value={isLoading}>
        <div className="w-full">
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
      </When>
      <When value={!isLoading}>
        <div className="bg-grayscale-900 w-full rounded-xl py-5 px-6">
          <div className="overflow-x-auto sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-0">
            <table className="w-full">
              <TableHead />
              <tbody className="flex flex-col gap-3 mt-2">
                <DividerTable />
                {data?.map((item: Client, index: number) => {
                  return(
                    <TableBodyCell key={index} data={item} />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </When>
    </>
  );
}
