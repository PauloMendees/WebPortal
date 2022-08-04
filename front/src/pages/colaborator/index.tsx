import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { ActionsToolbar } from "../../components/pageColaborator/ActionsToolbar";
import { AddClientForm } from "../../components/pageColaborator/AddClientForm";
import { ClientsTable } from "../../components/pageColaborator/ClientsTable";
import ToolBar from "../../components/shared/ToolBar";
import useListClient from "../../hooks/clients/useListClient";
import { Client } from "../../service/clients/types";

export default function Colaborator() {
  const [openClientForm, setOpenClientForm] = useState<boolean>(false);
  const { data, isLoading, error } = useListClient();
  const router = useRouter();
  const [filter, setFilter] = useState<string>("");

  function getFilteredData(){
    if(data){
      return data.data.filter(
        (x: Client) => x.email.includes(filter)
          || x.createdBy_email.includes(filter)
          || x.nome.includes(filter)
          || x.birthDate.includes(filter)
      )
    }
  }

  function handleFilter(e: any){
    setFilter(e.target.value)
  }

  useEffect(() => {
    if (error) {
      //@ts-ignore
      if (error.response.status === 403) {
        router.push("/");
      }
    }

    if (data) console.log(data.data);
  }, [data, error, router]);

  function handleOpenClientForm() {
    setOpenClientForm(!openClientForm);
  }

  return (
    <div className="bg-backgroundColor w-full">
      <ToolBar />
      <div className="w-full px-14 mt-8 flex flex-col items-center justify-center gap-8">
        <ActionsToolbar
          handleOpenClientForm={handleOpenClientForm}
          handleFilter={handleFilter}
          filter={filter}
        />
        <AddClientForm
          open={openClientForm}
          handleOpen={handleOpenClientForm}
        />
        <ClientsTable data={getFilteredData()} isLoading={isLoading} />
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
