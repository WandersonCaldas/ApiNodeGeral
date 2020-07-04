const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const url = ''
const options = { useNewUrlParser: true };

mongoose.connect(url, options);

mongoose.connection.on('error', (err) => {
    console.log('ERRO NA CONEXÃO COM O BANCO');
});

mongoose.connection.on('disconnected', () => {
    console.log('APLICAÇÃO DESCONECTADA');
});

mongoose.connection.on('connected', () => {
    console.log('APLICAÇÃO CONECTADA COM SUCESSO');
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(cors());

const indexRoute = require('./Routes/index');
const vagasRoute = require('./Routes/vagas');

app.use('/', indexRoute);
app.use('/vagas', vagasRoute);


/*
app .get('/', (req, res) => {
    return res.send({message: 'teste'});
});
*/

app.listen(3000);

module.exports = app;