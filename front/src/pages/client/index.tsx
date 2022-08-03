import { Skeleton } from "@mui/material";
import { parseCookies } from "nookies";
import React, { useState } from "react";
import SearchIcon from "../../assets/icons/Search";
import { CardValue } from "../../components/pageClient/CardValue";
import { DollarTable } from "../../components/pageClient/DollarTable";
import { Input } from "../../components/shared/Input";
import { H3 } from "../../components/shared/Texts";
import ToolBar from "../../components/shared/ToolBar";
import { When } from "../../components/shared/When";
import useGetMax from "../../hooks/dolar/useGetMax";
import useGetMedia from "../../hooks/dolar/useGetMedia";
import useGetMin from "../../hooks/dolar/useGetMin";

export default function Client() {
  const [filter, setFilter] = useState<string>("");
  const { data: maxValue, isLoading: maxLoading } = useGetMax();
  const { data: minValue, isLoading: minLoading } = useGetMin();
  const { data: mediaValue, isLoading: mediaLoading } = useGetMedia();

  return (
    <div className="bg-backgroundColor w-full">
      <ToolBar />
      <div className="w-full px-14 mt-8 flex flex-col justify-center gap-8">
        <H3 className="text-primary-white font-semibold">{`Dóllar Stream`}</H3>
        <div className="w-full flex items-center gap-6 justify-start">
          <When value={maxLoading || minLoading || mediaLoading}>
            <Skeleton
              sx={{ bgcolor: "grey.900", borderRadius: "12px" }}
              variant="rectangular"
              width={150}
              height={180}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900", borderRadius: "12px" }}
              variant="rectangular"
              width={150}
              height={180}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900", borderRadius: "12px" }}
              variant="rectangular"
              width={150}
              height={180}
            />
          </When>
          <When value={!maxLoading && !minLoading && !mediaLoading}>
            <CardValue value={maxValue?.data.value} label="Max" />
            <CardValue value={minValue?.data.value} label="Media" />
            <CardValue value={mediaValue?.data.value} label="Min" />
          </When>
        </div>
        <div className="bg-grayscale-900 w-full rounded-xl py-5 px-6">
          <Input
            onLeftIcon={<SearchIcon fill="#fff" />}
            placeholder="Pesquisa..."
            id="searchInput"
            value={filter}
            onChange={(e) => {
              console.log(e.target.value);
              setFilter(e.target.value);
            }}
          />
        </div>
        <DollarTable filter={filter} />
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const { "webportal-token-nav": savedToken } = await parseCookies(ctx);

  if (!savedToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
