import React from 'react';
import FooterContact from './Complementos/FooterContact';

function UsuarioIndividual({usuario}){
    return(
        <div className="container">
            <div className='flex flex-col h-[100vh] lg:h-[130vh] justify-center items-center pb-[16vh] lg:pb-[20vh] lg:ml-[50px]'>
                <div className='row'>
                    <h2 className='font-semibold text-[#006191] ml-[-120px] lg:ml-[-702px] py-[10px] flex-start '>Lista de Contactos</h2>
                </div>
                        <div className='w-[90vw] h-[67vh] py-[20px] lg:w-[80vw] lg:h-[90vh] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-between bg-[#F6F6F6] rounded-[33px] relative '>
                            <div className='relative flex flex-col items-center w-full'>
                                {usuario.nombres+ " "+usuario.apellidos}
                            </div>
                            <div className="text-[#186F9A] text-sm">(+57) {usuario.telefono}</div>
                        </div>
            </div>
            <div className="fixed bottom-0 w-[100vw]">
                <FooterContact />
            </div>
        </div>
    )
}

export default UsuarioIndividual