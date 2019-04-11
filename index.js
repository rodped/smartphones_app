// index.js
const express = require('express');
const bodyParser = require('body-parser');

const smartphone = require('./routes/smartphones.route'); // Importa rota

// inicializar app express
const app = express();
//app.use('/smartphones', smartphones);

let porto = 8000;
app.listen(porto, () => {
    console.log('Servidor em execução no porto' + porto);
});