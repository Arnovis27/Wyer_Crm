import React, { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';

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
    }


    return(
        <div className="container">
            <div className='row'>
                <h2 className='mt-4'>Nuevo Contacto</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombres' className='form-label'>Nombres</label>
                        <input type="text" className='form-control' value={nombres} onChange={(e)=>{setNombres(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='apellidos' className='form-label'>Apellidos</label>
                        <input type="text" className='form-control' value={apellidos} onChange={(e)=>{setApellidos(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type="email" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>Cel/Tel</label>
                        <input type="number" className='form-control' value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='nacimiento' className='form-label'>Fecha de nacimiento</label>
                        <input type="date" className='form-control' value={nacimiento} onChange={(e)=>{setNacimiento(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='direccion' className='form-label'>Direccion</label>
                        <input type="text" className='form-control' value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}></input>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="contrato" class="form-label">Contrato</label>
                        <select id="contrato" name="contrato" value={contrato} onChange={(e)=>{setContrato(e.target.value)}}>
                            <option value="null">---</option>
                            <option value="Empleado">Empleado</option>
                            <option value="Socio">Socio</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="origen" class="form-label">Origen</label>
                        <select id="origen" name="origen" value={origen} onChange={(e)=>{setOrigen(e.target.value)}}>
                            <option value="null">---</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </div>


                    <button onClick={guardarUsuario} className='btn btn-success'>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarUsuarios