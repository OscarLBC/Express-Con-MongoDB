const {usersModel} = require("../models")
const {compare,encryp} = require("../utils/hamddlePassword");
const {tokenSign} = require("../utils/hamddleJWT");
const {matchedData} = require("express-validator");
const hamddleHttpError = require("../utils/hamddleError");



/**
 * registrar un usuario en la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const registerController  = async (req,res) =>{
try {
req = matchedData(req);
const passwordHast = await encryp(req.password); //encriptamos las contraseña
const body = {...req,password:passwordHast};//lo que hace es sobre escribir o cambiara un dato de un elemento del objeto en esta  caso de password
const dateUser = await usersModel.create(body); //registramos el user en la coleccion de la base de datos
dateUser.set("password", undefined,{strict :  false}); //para segurida, nos sirve para que no nos muestre el datos del password

const date = { //objeto nuevo
    token: await tokenSign(dateUser), //utilizamos la funcion de firmar un token 
    user:dateUser                     //pasamo el objeto de usuario
}
res.send({date});

} catch (error) {
    hamddleHttpError(res,"ERROR EN  REGITERCONTROLLER AUTH");
}
};


/**
 * validar el usuario la funcion de login
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req,res) =>{
 try {
    req = matchedData(req);
    const user = await usersModel.findOne({email: req.email}) //hacemos la consulta del user en el base de datos con el email
    .select("password email name role "); //hacemos un select para requerir los datos de la base de datos
    
    if(!user){  //si esto es falso entonces
        hamddleHttpError(res,"USER NO EXISTE",404);
    return; //terminamos la funcion aqui
    };

    const hashPassword = user.get("password"); //contraseña encriptada de la base de datos
    const check = await compare(req.password,hashPassword); //utilizamos la funcion de compara que se encuentra en utilis hamddlePassword
    if(!check){
       hamddleHttpError(res,"PASSWORD INVALIDO",401);
        return ;
    };

    user.set("password", undefined, {strict:false}); //le decimos al objeto que no nos mande la respuesta el password por seguridad
    const data  = { //nuevo objeto 
        token : await tokenSign(user), //creamos nuestro token o firmamos con la funcion tokenSig que se encuentra en la capeta utils hamddleJWT
        user   //objeto user o usuaerio
    };

    res.send({data});

    
 } catch (error) {
    console.log(error);
    hamddleHttpError(res,"ERROR EN POST LOGINCONTROLLER AUTH");
 }
}

module.exports = {registerController,loginController}