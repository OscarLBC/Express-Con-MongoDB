/**
 * funcion que sirve para dar mensaje de error personalisado con estado de http
 * @param {*} res 
 * @param {*} message 
 * @param {*} code 
 */
const hamddleHttpError = (res,message = "algo sucedio", code=403) => {
 res.status(code);
 res.send({error: message});
}

module.exports = hamddleHttpError;