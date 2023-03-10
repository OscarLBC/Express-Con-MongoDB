const hamddleHttpError = require("../utils/hamddleError");
const {verifyToken} = require("../utils/hamddleJWT");

const {usersModel} = require("../models")

/**
 * funcion Middlerware para consultar si hay un token en cada consulta
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const authMiddleware = async (req,res,next) => {
try {

    if(!req.headers.authorization){ //validamos si existe un token
        hamddleHttpError(res,"NECESITAS UNA SESSION",401);
        return;
    }

    const token = req.headers.authorization.split(" ").pop(); //lo que llega String bearer jdfjkkdskd; lo cual hacemos guardar cada dato en un posicion de arreglo y cogemos el ultimo dato del arreglo con .pop()
    const dataToken = await verifyToken(token); //VERIFICAMOS SI EL TOKEN FUE FIRMADO POR NOSOTROS CON LA FUNCION verifyToken que se encuentra en la carpeta utils hamddleJWT

    if(!dataToken){ //validamos sin existe elemento en el objeto dataToken
        hamddleHttpError(res,"ERROR NO TOKEN",401);
        return;
    }


    if(!dataToken._id){ //validamos sin existe elemento _id en el arreglo o objeto
        hamddleHttpError(res,"ERROR ID TOKEN",401);
        return;
    }

    const user = await usersModel.findById(dataToken._id); //hacemos una busquedad del usuario en la base de datos
    req.user = user; //inyecto el objeto usuario a la peticion
    next();
    
} catch (error) {
    hamddleHttpError(res,"NO SESSION",401); 
}
}

module.exports = authMiddleware;