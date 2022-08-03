import { parseCookies } from 'nookies';
import * as React from 'react';
import { ActionsToolbar } from '../../components/pageColaborator/ActionsToolbar';
import { AddClientForm } from '../../components/pageColaborator/AddClientForm';
import { ClientsTable } from '../../components/pageColaborator/ClientsTable';
import { H1 } from '../../components/shared/Texts';
import ToolBar from '../../components/shared/ToolBar';

export default function Colaborator(){
  const [openClientForm, setOpenClientForm] = React.useState<boolean>(false)

  function handleOpenClientForm(){
    setOpenClientForm(!openClientForm)
  }

    return (
        <div className='bg-backgroundColor w-full'>
            <ToolBar />
            <div className='w-full px-14 mt-8 flex flex-col items-center justify-center gap-8'>
              <ActionsToolbar handleOpenClientForm={handleOpenClientForm} />
              <AddClientForm open={openClientForm} handleOpen={handleOpenClientForm} />
              <ClientsTable />
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx: any) => {
    const { 'webportal-token-nav': savedToken } = await parseCookies(ctx)
  
    if (!savedToken) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
    return {
      props: {}
    }
}