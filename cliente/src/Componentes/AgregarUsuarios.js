import React, { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';
import FooterContact from './Complementos/FooterContact';
import { useNavigate } from 'react-router-dom';



function AgregarUsuarios(){

    //Hooks
    const[nombres, setNombres]= useState('')
    const[apellidos, setApellidos]= useState('')
    const[email, setEmail]= useState('')
    const[telefono, setTelefono]= useState('')
    const[nacimiento, setNacimiento]= useState('')
    const[direccion, setDireccion]= useState('')
    const[contrato, setContrato]= useState('')
    const[origen, setOrigen]= useState('')



    function guardarUsuario(){
        var usuario= {
            nombres: nombres,
            apellidos: apellidos,
            email: email,
            telefono: telefono,
            nacimiento: nacimiento,
            direccion: direccion,
            contrato: contrato,
            origen: origen,
            idusuario: uniquid()
        }

        console.log(usuario);

        axios.post("/api/usuarios/agregarusuario",usuario).then(res=>{
            alert(res.data)
        }).then(err => {console.log(err)})
        
        navigate("/");
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }
    


    return(
        <div className="container">
            <div className='flex flex-col h-[100vh] lg:h-[130vh] justify-center items-center pb-[16vh] lg:pb-[20vh] lg:ml-[50px]'>
                <div className='row'>
                    <h2 className='font-semibold text-[#006191] ml-[-120px] lg:ml-[-702px] py-[10px] flex-start '>Nuevo Contacto</h2>
                </div>
                    <div className='w-[90vw] h-[67vh] py-[20px] lg:w-[80vw] lg:h-[90vh] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-between bg-[#F6F6F6] rounded-[33px] relative '>
                            <div className='relative flex flex-col items-center w-full'>
                                <input type="text" className='rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent' value={nombres} onChange={(e)=>{setNombres(e.target.value)}} placeholder="Nombres" htmlFor="nombres"></input>
                            </div>

                            <div className='relative flex flex-col items-center w-full'>
                                <input type="text" className='rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent' value={apellidos} onChange={(e)=>{setApellidos(e.target.value)}} placeholder="Apellidos" htmlFor="apellidos"></input>
                            </div>

                            <div className='relative flex flex-col items-center w-full'>
                                <input type="email" className='rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" htmlFor="email"></input>
                            </div>

                            <div className='relative flex flex-col items-center w-full'>
                                <input type="tel" className='rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent' value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} placeholder="Telefono" htmlFor="telefono"></input>
                            </div>

                            
                            <div className='relative flex flex-col items-center w-full'>
                                <input placeholder="Fecha de Nacimiento" type="text" onFocus={(e)=>(e.target.type= "date")} onBlur={(e)=>(e.target.type="text")} className='rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent' value={nacimiento} onChange={(e)=>{setNacimiento(e.target.value)}} htmlFor="nacimiento"></input>
                            </div>

                            <div className='relative flex flex-col items-center w-full'>
                                <input type="text" className='rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent' value={direccion} onChange={(e)=>{setDireccion(e.target.value)}} placeholder="Direccion" htmlFor="direccion"></input>
                            </div>

                            <div class="relative flex flex-col items-center w-full">
                                <select className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent" aria-label="Default select example" id="contrato" name="contrato" value={contrato} onChange={(e)=>{setContrato(e.target.value)}}>
                                    <option hidden selected>Contrato</option>
                                    <option value="Empleado" className="text-gray-700">Empleado</option>
                                    <option value="Socio" className="text-gray-700">Socio</option>
                                </select>
                                <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                                    <img className="w-[20px]" src="https://cdn-icons-png.flaticon.com/512/6687/6687903.png" alt="select_tag_icon"/>
                                </div>
                            </div>

                            <div class="relative flex flex-col items-center w-full">
                                <select className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent" aria-label="Default select example" id="origen" name="origen" value={origen} onChange={(e)=>{setOrigen(e.target.value)}}>
                                    <option hidden selected>Origen</option>
                                    <option value="Hombre" className="text-gray-700">Hombre</option>
                                    <option value="Mujer" className="text-gray-700">Mujer</option>
                                </select>
                                <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                                    <img className="w-[20px]" src="https://cdn-icons-png.flaticon.com/512/6687/6687903.png" alt="select_tag_icon"/>
                                </div>
                            </div>
                        <div className="flex flex-row justify-around w-[90vw] lg:w-[80vw]">
                            <button onClick={handleClick} className='w-[43vw] h-[40px] lg:w-[70vh] my-[15px] bg-[#D1D1D1] hover:bg-blue-700   px-4 rounded-full text-white text-lg font-medium'>Cancelar</button>
                            <button onClick={guardarUsuario} className='w-[43vw] h-[40px] lg:w-[70vh] my-[15px] bg-[#64CD98] hover:bg-blue-700   px-4 rounded-full text-white text-lg font-medium'>Agregar</button>
                        </div>
                </div>
            </div>
                <div className="fixed bottom-0 w-[100vw]">
                    <FooterContact />
                </div>
        </div>
        
    )
}

export default AgregarUsuarios