const {DataTypes} = require('sequelize')

const connection = require('./../db/connection')

const Colaborador = connection.define('Colaborador',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    sneha:{
        type: DataTypes.STRING,
        allowNull:false
    },
    funcao:{
        type: DataTypes.STRING,
        allowNull:false
    },
    data_contrato:{
        type: DataTypes.DATE,
        allowNull:false
    },
})

module.exports = Colaborador