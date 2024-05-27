const {DataTypes} = require("sequelize")

const connection = require("./../db/connection")
const Treino = require("./treino")



const Exercicio = connection.define("Exercicio",{
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    imagem:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descricao:{
        type:DataTypes.STRING,
        allowNull:false
    },
    repeticoes:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    execucao_por_repeticao:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    intervalo:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

Exercicio.hasMany(Treino, {foreignKey:"exercicioId"})

module.exports= Exercicio