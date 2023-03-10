const {IncomingWebhook} = require("@slack/webhook"); //paquete para conectarnos a slack
const webHook = new IncomingWebhook(process.env.SLACK_WEDHOOK); //instaciamos ese paquete

/**
 * funcion para conectar a slack que es un webhook
 * donde se guardaran todas peticiones de nuestro servidor 
 * es monitorear nuestro servidor
 * tambien se puede hacer con telegram, es para estar pediente de nuestro servido
 */

const loggerStream = {  //funncion de conexion
    write: message => {
        webHook.send({ //enviamos las peticiones a slack
            text: message
        })
       
    },
  };

  module.exports = loggerStream;