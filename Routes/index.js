const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'index.js'});
});

module.exports = router;