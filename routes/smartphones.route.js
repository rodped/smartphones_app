const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const smartphone_controller = require('../controllers/smartphone.controller');
// teste simples
router.get('/testar', smartphone_controller.test);
module.exports = router;