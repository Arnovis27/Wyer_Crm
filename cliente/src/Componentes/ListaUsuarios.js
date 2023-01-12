import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioInvidual';
import FooterContact from './Complementos/FooterContact';
import BotonAgregar from './Complementos/botonagregar';

function ListaUsuarios(){

    //Hooks
    const[datausuarios, setDatausuario]=useState([]);
    const[dinamicdata, setDinamicdata]= useState([]) //control real 
    const[busqueda,setBusqueda]= useState('')

    useEffect(()=>{
        axios.get("api/usuarios/obtenerusuario").then(res=>{
            console.log(res.data)
            setDinamicdata(res.data)
            setDatausuario(res.data)
        }).catch(err=>{
            console.log(err)
        })
        
    }, [])

    //mapear lista usuarios en objeto
    const listauser= dinamicdata.map(usuario => {
        return(
            <div>
                
                <UsuarioIndividual usuario={usuario}/>
                <hr></hr>
                
            </div>
        )
    })

    //filtrado barra de busqueda
    const handleChange=e=>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }
    
    const filtrar=(terminobusqueda)=>{
        var resultadobusqueda= datausuarios.filter((elemento)=>{
            if(elemento.nombres.toString().toLowerCase().includes(terminobusqueda.toLowerCase()) || elemento.telefono.includes(terminobusqueda)){
                return elemento;
            }
        })
        setDinamicdata(resultadobusqueda)
    } 


    return(
        <div className="container">
            <div>
                <div className="flex items-center">   
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full pl-[250px] flex flex row">
                        <input value={busqueda} onChange={handleChange} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                        <img className="w-[20px] h-[20px] ml-[-33px] mt-[11px]" src="https://cdn-icons-png.flaticon.com/512/4929/4929731.png" alt="search"/>
                    </div>
                </div>
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