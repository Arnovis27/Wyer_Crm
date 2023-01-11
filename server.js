const express= require("express");
const app= express();
const PORT = process.env.PORT || 5000;

//conexionDB
const archivoDB= require("./conexion");

const bodyParser= require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

//importacion rutas y modelo
const rutasUsuario= require("./rutas/usuario");
app.use("/api/usuarios/", rutasUsuario);

app.get("/",(req,res)=> {
    res.end("Servidor Backend corriendo");
});

//configurar server basico
app.listen(PORT, function(){
    console.log("El servidor esta corriendo en el puerto "+ PORT);
})
