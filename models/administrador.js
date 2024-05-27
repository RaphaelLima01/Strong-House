const {DataTypes} = require('sequelize')

const connection = require('./../db/connection')

const Administrador = connection.define('Administrador', {
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Administrador