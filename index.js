// index.js
const express = require('express');
const bodyParser = require('body-parser');
// inicializar app express
const app = express();

let porto = 8000;
app.listen(porto, () => {
    console.log('Servidor em execução no porto' + porto);
});