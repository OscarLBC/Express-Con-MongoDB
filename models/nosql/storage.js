const mongoose = require("mongoose");
const mongosseDelete = require("mongoose-delete");

const StorageSchema = new mongoose.Schema(  //creamo el esquema o la estrucutara de la coleccion de Storage
{
  url: {
    type: String,
  },
  filename:{
   type: String,
  }
},
{
   timestamps: true, //sirve para que guarde la fechas de creacion y actualizacion
   versionKey: false
}
);

StorageSchema.plugin(mongosseDelete,{overrideMethods: "all"});

module.exports = mongoose.model("storage",StorageSchema); //exportamos el esquema de la coleccion storage,primer paramatro nombre de la collecion y segundo el esquema