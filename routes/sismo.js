var express = require('express');
var router = express.Router();
const RegisterController = require("../controllers/SismosController");

/* GET All registers */
router.get('/', RegisterController.getAll);
router.get('/:id', RegisterController.getOneById);

router.post('/', RegisterController.insert);

router.put('/', RegisterController.update);

router.delete('/', RegisterController.deleteById);
module.exports = router;
