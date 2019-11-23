var express = require('express');
var router = express.Router();
const RegisterController = require("../controllers/SismosController");

/* GET home page. */
router.get('/', function(req, res, next) {
  let sismos = RegisterController.getAll;
  res.render('index', { title: 'Sismos', h1: 'REGISTROS', sismos });
});

module.exports = router;
