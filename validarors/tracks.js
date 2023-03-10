const {check} = require("express-validator"); //utilizamos el paquete express-validator
const validationResults = require("../utils/hamddleValidator"); //utilizamos la funcion de validar que se encuentra en la carpetas ultils


const validatorCreateItem = [
 check("name") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
  
 check("album") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres

check("cover") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:300}),//el numero de caracteres
  
 check("artist") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
 
 check("artist.name") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
 
 check("artist.nickname") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
  
 check("artist.nationality") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
  
 check("duration") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
  
 check("duration.start") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
  
 check("duration.end") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:90}),//el numero de caracteres
  
 check("mediaId") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:1,max:200}),//el numero de caracteres
  
  (req,res,next) =>{ //funcion que recibe 3 parametros y son lo mismo que recibe la funcion de validar
    validationResults(req,res,next);
  } 
];


const validatorGetItmen = [
  check("id") 
  .exists()  
  .notEmpty(),
   (req,res,next) =>{ //funcion que recibe 3 parametros y son lo mismo que recibe la funcion de validar
     validationResults(req,res,next);
   } 
 ];

module.exports = {validatorCreateItem,validatorGetItmen};