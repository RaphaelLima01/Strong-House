const {DataTypes} = require("sequelize")


const connection = require("./../db/connection")


const Treino = connection.define('Treino',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

})

module.exports = Treino