const {check} = require("express-validator");
const validationResults = require("../utils/hamddleValidator")


const validatorCreateItem = [
    check("url")
    .exists()
    .notEmpty()
    .isLength({min:1,max:200}),

    check("filename")
    .exists()
    .notEmpty()
    .isLength({min:1,max:90}),
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

