const express= require("express");
const router= express.Router();

const mongoose= require("mongoose");
const eschema= mongoose.Schema

const eschemaUsuario= new eschema({
    nombres: String,
    apellidos: String,
    email: String,
    telefono: String,
    nacimiento: String,
    direccion: String,
    contrato: String,
    origen: String,
    idusuario: String
})

const ModelUsuario= mongoose.model("usuarios", eschemaUsuario)
module.exports= router;

//rutas

//obtener usuario
router.get("/obtenerusuario",(req,res)=>{
    ModelUsuario.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }

    })
})


//agregar usuario
router.post("/agregarusuario", (req,res)=>{
    const nuevousuario= new ModelUsuario({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        nacimiento: req.body.nacimiento,
        direccion: req.body.direccion,
        contrato: req.body.contrato,
        origen: req.body.origen,
        idusuario: req.body.idusuario
    })

    nuevousuario.save(function(err){
        if(!err){
            res.send("Usuario agregado correctamente")
        }else{
            res.send(err)
        }
    })
})