require("dotenv").config(); //con esto instalamos el paquete de dontenv para manejar varia de entorno mi aplicacion o proyectos
const express = require("express"); //importamos el paquete de express
const cors = require("cors"); //importamos paquete de cors
const {dbConectMySql} = require("./config/mysql"); //importamos el module de mysql.js que tiene la conexion de la base de datos
const dbConnectMongo = require("./config/mongo"); //importamos el module de mongo.js que tiene la conexion de la base de datos
const app = express(); //instanciamos el paquete de exprees en una variable app


const morganBody = require("morgan-body"); //paquete que nos sirve para capturas las peticiones a nuestro servidor
const loggerStream = require("./utils/hamddleStorage");//funcion utils para guardar las peticiones en un webhook


app.use(cors()); //evitar problema de cors
app.use(express.json()); //prepara la api de recibir y manejar archivo de tipo json
app.use(express.static("storage")); //decirle al servidor que tenga en cuentas los archivo estatico de la carpeta storage


/**
 * funcionde morgan-body, capturar peticiones
 */
morganBody(app,{  
    noColors: true, //atributo de no colres
    stream:loggerStream, // funcion de cocnexion del webhook se encuentra en utils HamddleLogger
    skip: function (req,res){ //skip es ignorar
     return res.statusCode< 400; //ignoramos las peteciones del 300 a 100, solo nos interesan las respuesta de error
    }
})

/**
 * fin
 */

const PORT = process.env.PORT || 3000; //utlizamos la variable de entorno env 

//AQUI INVOCAMOS LAS RUTAS

//esto quiere decir http://localhos:3000/api/tracks
app.use("/api",require("./routes")); //por defecto toma el archivo index.js de la carpeta de route

app.listen(PORT,() =>{
    console.log("Servidor esta ecuchando por http://localhost:"+PORT);
});


dbConnectMongo() ;




