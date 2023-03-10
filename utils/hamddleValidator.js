/**
 * funcion que completa las funciones de  validaciones de la carpeta validator
 */
const { validationResult } = require("express-validator"); //utilizamos el paquete express-validator


const validationResults = (req,res,next) =>{
try {
    validationResult(req).throw();
    return next();

} catch (err) {
    res.status(403);
    res.send({error: err.array() });
}
}

module.exports = validationResults;