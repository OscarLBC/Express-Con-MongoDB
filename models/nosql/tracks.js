const mongoose = require("mongoose");
const mongoseeDelete = require("mongoose-delete");

const TracksSChema = new mongoose.Schema(  //creamo el esquema o la estrucutara de la coleccion de tracks
{
  name: {
    type: String,
  },
  album:{
   type: String,
  },
  cover:{
    type: String,
    /* validate: {
        validator:(req)=> {
          return true;
        },
        message: "ERROR_URL",
     }, */
  },
 artist: {
    name: {
        type: String,
    },
    nickname: {
        type: String,
    },
    nationality: {
        type: String,
    }
 },
 duration:{
    start: {
        type: Number,
    },
    end:{
        type: Number,
    }
 },
 mediaId:{
   type:String,
    //type: mongoose.Types.ObjectId,
 }
},
{
   timestamps: true, //sirve para que guarde la fechas de creacion y actualizacion
   versionKey: false
}
);

TracksSChema.plugin(mongoseeDelete,{overrideMethods: "all"});

module.exports = mongoose.model("tracks",TracksSChema); //exportamos el esquema de la coleccion tracks,primer paramatro nombre de la collecion y segundo el esquema