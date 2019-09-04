var express = require('express');
var router = express.Router();

var data = require('../../data/escolas.json');

router.get('/', function (req, res) {
    res.send(data);
});

router.get('/:id', function (req, res) {
    res.send(data.find(a => a.id == req.params.id));
});

module.exports = router;
