const mongoose = require("mongoose");

const dbConnectMongo = () => {
  const DB_URI = process.env.DB_URI;

  mongoose.set("strictQuery",false);
  
  mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },(err,res) => {
    if (!err) {
      console.log("MONGODB : CONECTADO A LA BASE DE DATOS");
    } else {
       console.log("MONGODB : ERROR A CONECTARSE EN LA BASE DE DATO");
    }
  })
  
}
    


module.exports = dbConnectMongo; 