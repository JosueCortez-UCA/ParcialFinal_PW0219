var express = require('express');
var router = express.Router();
const RegisterController = require("../controllers/SismosController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sismos', h1: 'REGISTROS' });
  console.log(sismos);
  
});

module.exports = router;
