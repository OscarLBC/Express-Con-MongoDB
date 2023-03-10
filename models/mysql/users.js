const  {DataTypes} = require("sequelize");
const {sequelize} = require("../../config/mysql");

const Storage = sequelize.define(
 "storage",
 {
    url: {
       type : DataTypes.STRING,
       allowNull: false,
    },
    filename: {
      type : DataTypes.STRING,
    },
 }, 
 {
    timestamps: true,
 }
);

module.exports = Storage;
