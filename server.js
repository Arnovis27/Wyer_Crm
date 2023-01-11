const express= require("express");
const app= express();
const port= 5000;

//conexionDB
const archivoDB= require("./conexion");

//rutas
app.get("/",(req,res)=> {
    res.end("Servidor Backend corriendo");
});

//configurar server basico
app.listen(port, function(){
    console.log("El servidor esta corriendo en el puerto "+ port);
})
