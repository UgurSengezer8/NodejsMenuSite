const express = require('express');

var router = express.Router();

var indexController = require('../controller/menuController');

router.post("/menu",indexController.menuPost)
router.get("/menu",indexController.menuGet)
router.get("/menu/:id",indexController.menuGetId)
router.get("/menuadd",indexController.menuAddGet)



module.exports=router;