const mongoose = require("mongoose");
const mongoseeDelete = require("mongoose-delete");

const UserSChema = new mongoose.Schema(  //creamo el esquema o la estrucutara de la coleccion de usres
{
  name: {
    type: String,
  },
  age:{
   type: Number,
  },
  email:{
    type: String,
    unique: true,
  },
 password: {
    type: String,   
    select: false,
 },
 role:{
    type: ["user","admin"],
    default: "user",
 }
},
{
   timestamps: true, //sirve para que guarde la fechas de creacion y actualizacion
   versionKey: false
}
);

UserSChema.plugin(mongoseeDelete,{overrideMethods:"all"});

module.exports = mongoose.model("users",UserSChema); //exportamos el esquema de la coleccion users,primer paramatro nombre de la collecion y segundo el esquema