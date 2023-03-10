const express = require("express");
const router = express.Router();
const {validatorLogin,validatorRegistre}= require("../validarors/auth");
const {registerController,loginController} = require("../controllers/auth")

router.post("/register",validatorRegistre,registerController);
router.get("/login",validatorLogin,loginController);

module.exports = router;