/**
 * funcion que nos ayuda en el manejos de archivos 
 */
const multer = require("multer");


//configuracion de storage o multer

const storage = multer.diskStorage({
    destination:function(req,file,cb){ //donde seran guardados nuestro archivos
    const pathStorage = __dirname+"/../storage"; //damos la direccionde nuestra carpeta llamada storage
    cb(null,pathStorage); //utlizamos la funcion callback, que recibe como parametro un error=null y el destino donde se van aguardar nuestro archivo
    },
    filename:function(req,file,cb){
     //TODOS LOS ARCHIVOS COMO  .png,.mp3,.pdf,mp4
     const ext = file.originalname.split(".").pop(); //regresa un array de esta forma ["nombrearchivo","png"],cada punto sera una posicion en nuestra array, con pop() toamamos el ultimo valor de la array
     const filename = "file-"+Date.now()+"."+ext; //Nombre del Archivo, todos los archivmos comenzaran con file y mas fecha de registro y la extencion del archivo, ejemplo file-123456345.png
     cb(null, filename);  
    }
     
 })

 const uploadMiddlerware = multer({storage}); //middlerware esta entre la peticion de cliente y el servidor de forma de pared en esa conexion

 module.exports = uploadMiddlerware;