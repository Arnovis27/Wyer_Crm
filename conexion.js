const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactos');

const objetobd= mongoose.connection

objetobd.on('connected', ()=>{console.log("Conexion correcta a la BASE DE DATOS")})
objetobd.on('error', ()=>{console.log("Error en Conexion a la BASE DE DATOS")})

module.exports= mongoose