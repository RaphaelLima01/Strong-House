const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('db_strong_house' , 'root', '', {
    host: 'localhost',
    dialect:'mysql'
});

// 

module.exports = sequelize