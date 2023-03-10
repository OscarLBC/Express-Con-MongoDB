const express = require("express");
const router = express.Router();
const {getItems,getItem,createItem,updateItem,deleteItem} = require("../controllers/tracks");
const {validatorCreateItem,validatorGetItmen} = require("../validarors/tracks");
const authMiddleware = require("../middleware/session"); //si existe  un session o token 
const checkRol = require("../middleware/rol");//si existe  un session o token 




router.get("/",authMiddleware,getItems); //creamo la ruta con el metodo http y le mandamos la funcion correspondiente, se encuentra ubicada las carpeta controllores
//         rutas, middleware(utils), controller            
router.get("/:id",authMiddleware,validatorGetItmen,getItem);
router.post("/",authMiddleware,checkRol(["admin"]),validatorCreateItem,createItem);
router.put("/:id",authMiddleware,validatorGetItmen,validatorCreateItem,updateItem);
router.delete("/:id",authMiddleware,validatorGetItmen,deleteItem);


module.exports = router;