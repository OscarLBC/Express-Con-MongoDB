const {check} = require("express-validator"); //utilizamos el paquete express-validator
const validationResults = require("../utils/hamddleValidator"); //utilizamos la funcion de validar que se encuentra en la carpetas ultils


const validatorRegistre = [
 check("name") //escogemos el dato a validar del modelo
 .exists()  //si existe el dato name
 .notEmpty() //que no este vacio
 .isLength({min:3,max:99}),//el numero de caracteres
  
 check("age") 
 .exists()  
 .notEmpty() 
 .isNumeric(),

 check("email") 
 .exists()  
 .notEmpty() 
 .isEmail(),

 check("password") 
 .exists()  
 .notEmpty() 
 .isLength({min:6,max:20}),

  
  (req,res,next) =>{ //funcion que recibe 3 parametros y son lo mismo que recibe la funcion de validar
    validationResults(req,res,next);
  } 
];

const validatorLogin = [
   
    check("email") 
    .exists()  
    .notEmpty() 
    .isEmail(),
   
    check("password") 
    .exists()  
    .notEmpty() 
    .isLength({min:6,max:20}),
   
     
     (req,res,next) =>{ //funcion que recibe 3 parametros y son lo mismo que recibe la funcion de validar
       validationResults(req,res,next);
     } 
   ];


module.exports = {validatorRegistre,validatorLogin};