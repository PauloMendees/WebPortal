import { useEffect } from "react";
import useListDolar from "../../../hooks/dolar/useListDolar";
import { DividerTable } from "../../shared/DividerTable";
import { SearchAnimated } from "../../shared/SearchAnimated";
import { TableBodyCell } from "./TableBodyCell";
import { TableHead } from "./TableHead";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { When } from "../../shared/When";
import useDolarTable from "./hooks/useDollarTable";
import { DolarData } from "../../../service/dolar/types";
import { Skeleton } from "@mui/material";

type DollarTableProps = {
  filter: string
}

export function DollarTable({ filter }: DollarTableProps) {
  const { data: dolarList, isLoading } = useListDolar();
  const { getPageData, pageAdd, pageSubtract } = useDolarTable();

  return (
    <div className="bg-grayscale-900 w-full rounded-xl py-5 px-6">
      <div className="overflow-x-auto sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-0">
        <When value={!isLoading && dolarList}>
          <table className="w-full">
            <TableHead />
            <tbody className="w-full flex flex-col gap-3 mt-2">
              <DividerTable />
              {/*@ts-ignore*/}
              {getPageData(dolarList?.data, filter)?.map(
                (item: DolarData, index: number) => {
                  return <TableBodyCell data={item} key={index} />;
                }
              )}
            </tbody>
          </table>
          {/*@ts-ignore*/}
          <When value={dolarList?.data.length > 10}>
            <div className="w-full mt-7 flex justify-end items-center gap-6">
              <button onClick={pageSubtract}>
                <ArrowBackIosNewRoundedIcon fontSize="small" />
              </button>
              <button
                onClick={() => {
                  /*@ts-ignore*/
                  pageAdd(dolarList?.data);
                }}
              >
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </button>
            </div>
          </When>
        </When>
        <When value={isLoading}>
          <div className="w-full">
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        </When>
      </div>
    </div>
  );
}
