import { useRouter } from 'next/router';
import * as React from 'react';
import ArrowRightIcon from '../../../../../assets/icons/ArrowRight';
import { Button } from '../../../../shared/Button';
import { H3 } from '../../../../shared/Texts';

export function Confirmation(){
    const router = useRouter()

    return(
        <div className='w-full flex flex-col justify-center items-center gap-6'>
            <H3 className='text-primary-white'>
                {`Cadastro realizado com sucesso.`}
            </H3>
            <Button onClick={() => { router.push('/') }}>
                {`Ir para login`}
                <ArrowRightIcon />
            </Button>
        </div>
    )
}