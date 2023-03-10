const models = { //un array que tiene todos los modelos o esquema de las colecciones o tablas de base de datos
    usersModel: require("./nosql/users"),
    traksModel: require("./nosql/tracks"),
    storageModel:require("./nosql/storage")
}

module.exports = models;