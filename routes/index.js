/**
 * ME CREAS LAS RUTAS DINAMICAS/TOMANDO LOS NOMBRE DE LOS ARCHIVOS
 */
const express = require("express");
const router = express.Router();
const fs = require("fs"); //modulo para manejar archivos

const PATH_ROUTES = __dirname; // capturamos el camino del archivo donde se encueenntra ubicado

const removeExtension = (fileName) =>{
    //filName trae el nombre del archivo con su estencion ejemplo tracks.js
 return fileName.split(".").shift(); //devuel un arreglo ["tracks,"js"]; con .shift() toma el primer valor o posicion de la array
};

fs.readdirSync(PATH_ROUTES).filter((file)=>{ //estoy es un array que tiene todos  los nombre de los archivos de la carpeta routes y su extencion este caso .js
const name = removeExtension(file); //tenemos el nombre del archivo sin su extencion ejemplo tracks

if (name !== "index") { //hacemos una condicion que no interesa el archivo index
    router.use("/"+name,require("./"+file)); //esto va ser http://localhost:3000/api/el nombre del archivo que no sea index
} 
}) ;


module.exports = router;

