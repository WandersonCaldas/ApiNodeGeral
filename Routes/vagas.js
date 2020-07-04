const express = require('express');
const router = express.Router();
const Vagas = require('../model/vaga');

router.get('/', (req, res) => {
    Vagas.find({}, (err, data) => {
        if (err) return res.send({ error: 'ERRO NA CONSULTA' });

        return res.json(data);
    }); 
});

module.exports = router;