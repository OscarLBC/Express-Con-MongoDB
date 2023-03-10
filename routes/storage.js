const {getItems,getItem,createItem,deleteItem} = require("../controllers/storage");
const express = require("express");
const router = express.Router();
const {validatorCreateItem,validatorGetItmen} = require("../validarors/storage")
const uploadMiddlerware = require("../utils/hamddleStorage"); //modulo que se encuentra en la carpe utils, cual manejas nuestro archivos

router.get("/",getItems);
router.get("/:id",validatorGetItmen,getItem);
router.post("/",uploadMiddlerware.single("myfile"),createItem); //creamo la ruta con el metodo http y le mandamos la funcion correspondiente, se encuentra ubicada las carpeta controllores
router.delete("/:id",validatorGetItmen,deleteItem);


module.exports = router;