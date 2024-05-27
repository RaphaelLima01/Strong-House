const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();


//conexão com o banco de dados
const connection = require('./db/connection')

//importação de models
const Cliente = require("./models/cliente");
const Administrador = require('./models/administrador');
const Colaborador = require("./models/colaborador");
const Treino = require("./models/treino");
const Exercicio = require ("./models/exercicio");
const TreinoExercicio = require("./models/TreinoExercicio")

//rotas
const cliente = require("./cliente/cliente");
const { error } = require("console");

// ler body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine' , 'handlebars');
app.set('views', path.join(__dirname , 'views'));

app.use(express.static(path.join(__dirname , 'public')));

const basePath = path.join(__dirname, "views");

// Usando  módulos
app.use('/', cliente);

app.get('/', (req, res) => {
    res.render('index');
});


connection.sync().then(()=>{
    app.listen(8000)
}).catch(err => console.log(error))