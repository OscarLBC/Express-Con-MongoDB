const  {DataTypes} = require("sequelize");
const {sequelize} = require("../../config/mysql");

const Tracks = sequelize.define(
 "tracks",
 {
    name: {
       type : DataTypes.STRING,
       allowNull: false,
    },
    album: {
      type : DataTypes.STRING,
    },
    cover: {
    type: DataTypes.STRING,
    },
    artisr_name: {
    type: DataTypes.STRING,
    },
    artisr_nickname: {
      type: DataTypes.STRING,
   },
   artisr_nationality: {
      type: DataTypes.STRING,
    },
   duration_star: {
      type: DataTypes.NUMBER,
   },
   duration_end: {
      type: DataTypes.NUMBER,
    },
    mediaId: {
      type: DataTypes.STRING,
    }             
 }, 
 {
    timestamps: true,
 }
);

module.exports = Tracks;

