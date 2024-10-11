var express = require('express');
var router = express.Router();

//panggil controllers main
var mainControllers = require("../controllers/main");

/* GET home page. */
router.get('/', mainControllers.index);
router.get('/kontak', mainControllers.kontak);
router.get('/profil', mainControllers.profil);


module.exports = router;
