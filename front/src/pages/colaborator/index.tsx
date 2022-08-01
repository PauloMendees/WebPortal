import { parseCookies } from 'nookies';
import * as React from 'react';
import { ActionsToolbar } from '../../components/pageColaborator/ActionsToolbar';
import { H1 } from '../../components/shared/Texts';
import ToolBar from '../../components/shared/ToolBar';


export default function Colaborator(){
    return (
        <div className='w-screen'>
            <ToolBar />
            <div className='w-full px-14 mt-8'>
              <ActionsToolbar />
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