const { matchedData } = require("express-validator");
const {traksModel} = require("../models"); //importamos el modulo de modelo de la coleccion tracks
const {hamddleHttpError} = require("../utils/hamddleError"); //importamos modulo hamddlerError
/**
 * obtener todos los registros
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res)=>{
    try {
        const user = req.user;  //viene del middelware de sesion, donde estan los datos del usuario


        const data = await traksModel.find({});
        res.send({data, user});
    } catch (error) {
        hamddleHttpError(res,"ERROR EN GET ITEMS TRACKS"); //manajador de eerores esta en la carpeta utils
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
        const data = await traksModel.findById(id);
        res.send(data);
        
    } catch (err) {
        hamddleHttpError(res,"ERROR EN GET ITEM TRACKS"); //manajador de eerores esta en la carpeta utils
    }
};

/**
 * crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req,res)=>{

    try {
        const body = matchedData(req); //limpia la peticion de cliente que no vaya valor no deseados
        const data = await traksModel.create(body);
        res.send({data});
    } catch (error) {
        hamddleHttpError(res,"ERROR EN CREATE ITEMS TRACKS"); //manajador de eerores esta en la carpeta utils
    }
   
};

/**
 * actualizar un registrp
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req,res)=>{
    try {
        const {id, ...body} = matchedData(req); 
        const data = await traksModel.findByIdAndUpdate(id,body);
        res.send({data});
    } catch (error) {
        hamddleHttpError(res,"ERROR EN UPDATE ITEM TRACKS"); //manajador de eerores esta en la carpeta utils
    }
};

/**
 * eleminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async  (req,res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await traksModel.delete({_id:id});
        res.send(data);
        
    } catch (err) {
        hamddleHttpError(res,"ERROR EN DELETE ITEM TRACKS"); //manajador de eerores esta en la carpeta utils
    }
};


module.exports = {getItems,getItem,createItem,updateItem,deleteItem}