import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioInvidual';

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
            </div>
        )
    })


    return(
        <div>
            {listauser}
        </div>
    )
}

export default ListaUsuarios