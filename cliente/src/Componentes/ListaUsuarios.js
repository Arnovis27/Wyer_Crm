import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioInvidual';
import FooterContact from './Complementos/FooterContact';
import BotonAgregar from './Complementos/botonagregar';
import FiltrarUsuario from './FiltrarContact';

function ListaUsuarios(){

    //Hooks
    const[datausuarios, setDatausuario]=useState([]);

    useEffect(()=>{
        axios.get("api/usuarios/obtenerusuario").then(res=>{
            console.log(res.data)
            setDatausuario(res.data)
        }).catch(err=>{
            console.log(err)
        })
        
    }, [])

    //mapear lista usuarios en objeto
    const listauser= datausuarios.map(usuario => {
        return(
            <div>
                
                <UsuarioIndividual usuario={usuario}/>
                <hr></hr>
                
            </div>
        )
    })


    return(
        <div className="container">
            <div>
                <FiltrarUsuario/>
            </div>
            <div className='flex flex-col h-[100vh] lg:h-[130vh] justify-center items-center pb-[16vh] lg:pb-[20vh] lg:ml-[50px]'>
                <div className='row'>
                    <h2 className='font-semibold text-[#006191] ml-[-120px] lg:ml-[-702px] py-[10px] flex-start '>Lista de Contactos</h2>
                </div>
                <div className='w-[90vw] h-[67vh] py-[20px] lg:w-[80vw] lg:h-[90vh] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-between bg-[#F6F6F6] rounded-[33px] relative '>
                        <div className='relative flex flex-col items-center w-full'>
                            {listauser}
                        </div>
                </div>
            </div>
            
            <div className="fixed bottom-0 w-[100vw]">
                <div className='bg-[#006191] hover:bg-green-800 rounded-full w-48 h-[33px] m-2 ml-[36rem]'>
                    <BotonAgregar/>
                </div>
                
                <FooterContact />
            </div>
        </div>
    )
}

export default ListaUsuarios