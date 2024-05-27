const { DataTypes } = require("sequelize");
const connection = require("./../db/connection");
const Treino = require("./treino");
const Exercicio = require("./exercicio");

Treino.belongsToMany(Exercicio, { through: 'TreinoExercicio', foreignKey: 'treinoId', otherKey: 'exercicioId' });
Exercicio.belongsToMany(Treino, { through: 'TreinoExercicio', foreignKey: 'exercicioId', otherKey: 'treinoId' });

module.exports = {
    Treino,
    Exercicio
};
