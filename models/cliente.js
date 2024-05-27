const {DataTypes} = require('sequelize')

const connection = require('../db/connection');
const Treino = require('./treino');
const { all } = require('../cliente/cliente');

const Cliente = connection.define('Cliente',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    foto:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

Cliente.belongsTo(Treino)

module.exports = Cliente