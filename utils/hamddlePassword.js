/**
 * sirve para incriptar informacion y hacer compracion de esa scripcion para users
 */
const bcryptjs = require("bcryptjs");

/**
 * 
 * @param {*} passwordPlain //recibe la contraseña en plano, aun no esta incriptada 
 */
const encryp = async (passwordPlain)=>{
 const hash = await bcryptjs.hash(passwordPlain,10); //funcion hash que recibe la contraseña y el numero de caracteres para la incriptacion
 return hash; 
}

/**
 * 
 * @param {*} passwordPlain contraseña sin encriptar 
 * @param {*} hashPassword contraseña encriptada
 */
const compare = async (passwordPlain,hashPassword) => {
 return await bcryptjs.compare(passwordPlain,hashPassword); //hacemos la compracion de las contraseña
}

module.exports = {encryp,compare};