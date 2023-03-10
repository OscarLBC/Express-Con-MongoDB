const {Sequelize} = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect:"mysql"
    }
);

const dbConectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySql : CONECTADO A LA BASE DE DATOS" );
    } catch (error) {
        console.log("MySql : ERROR DE CONEXION :", error);
    }
}

module.exports = {sequelize,dbConectMySql}