const hamddleHttpError=require("../utils/hamddleError")

/**
 * funcion middlerware verificar que rol tiene el usuario si es user o admin
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const checkRol = (roles) => (req,res,next) =>{
    try {

        const {user} = req; //ya la solicitud viene con los datos del usuario debido al middlerware session
        const rolesByUser = user.role; //capturamos el rol del usuario que por defecto es de tipo user
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); //consultamos si existe es tipo de usuario

        if(!checkValueRol){
            hamddleHttpError(res,"NO PERMISO DE USERS");
            return

        }
        next();
    } catch (error) {
        hamddleHttpError(res,"ERROR PERMISOS");
    }
 
}

module.exports = checkRol;