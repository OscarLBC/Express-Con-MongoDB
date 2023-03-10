const {storageModel} = require("../models");
const fs = require("fs");
const {matchedData} = require("express-validator");
const hamddleHttpError = require("../utils/hamddleError");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = __dirname+"/../storage";
/**
 * obtener todos los registros
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res)=>{
    try {
        const data = await storageModel.find({});
        res.send({data});
        
    } catch (error) {
        hamddleHttpError(res,"ERROR EN GET ITEMS STORAGE"); //manajador de eerores esta en la carpeta utils
    
    }

};

/**
 * obtener un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req,res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await storageModel.findById(id);
        res.send(data);
        
    } catch (err) {
        hamddleHttpError(res,"ERROR EN GET ITEM STORAGE"); //manajador de eerores esta en la carpeta utils
    }
};

/**
 * crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async(req,res)=>{
    try {
        const {body, file} = req; //capturamos datos que viene en el cuerpo y los datos de file que es un array
        console.log(file);
        const fileData = { //capturamos lo datos del arreglo file
            filename: file.filename, //nombre del archivo
            url: PUBLIC_URL+"/"+file.filename, //la url del archivo que seria http://localhost:300/nombredelarchivo.png
           }
        const data = await storageModel.create(fileData); //lo guradamos en la coleccion
        res.send({data}); //mandamos la respuesta
        
    } catch (error) {
        hamddleHttpError(res,"ERROR EN CREATE ITEM STORAGE"); //manajador de eerores esta en la carpeta utils
    
    }
    
};



/**
 * eleminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req,res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const dataFile = await storageModel.findById(id); //hacemos la busque del item a eliminar en la base de datos
        await storageModel.delete({_id:id}); //asi hacemos un borrado logico DB/ deleteOne({_id:id}) hacemos un eliminacion absoluto
        const {filename}= dataFile; //obtenemos el nombre del item o archivo
        const filePath = MEDIA_PATH+"/"+filename; //obtenemos la direccion donde se encuentra el archivo
        //fs.unlinkSync(filePath); //eliminamos el archivo de la carpeta storage (imagen)
        const data = {
            filePath,
            deleted:1
        };
        res.send(data);
        
    } catch (err) {
        hamddleHttpError(res,"ERROR EN DELETE ITEM STORAGE"); //manajador de eerores esta en la carpeta utils
    }
};


module.exports = {getItems,getItem,createItem,deleteItem}