const jsonwedtoken = require("jsonwebtoken");
const { model } = require("mongoose");
const JWT_SECRET = process.env.JWT_SECRET;


/**
 * funcion que sirve para dar una firma o JWT de un usuario para permiso
 * @param {*} user pasamos el objeto del usuario de la base de datos
 */
const tokenSign = async (user) => {

const sing = jsonwedtoken.sign({ //firmamos nuestro token
 _id :user._id,                  //pasamos los datos que nos interesa del objeto user
 role: user.role
},
JWT_SECRET,                      //nuestro token es uan variable de entorno env
{
    expiresIn: "2h",            //opcional le damos el tiempo de vecimiento de nuestro token 
});
 return sing;

};

/**
 * funcion que sirve para verificar si el token en realidad fue firmada por nosotros por seguridad
 * @param {*} tokenJWT pasamos nuestro token de sesion
 */
const verifyToken = async (tokenJWT) =>{
 try {
    return jsonwedtoken.verify(tokenJWT,JWT_SECRET);
    
 } catch (error) {
    return null;
 }
};

module.exports = {tokenSign,verifyToken}