const express = require('express');

var router = express.Router();

var indexController = require('../controller/indexController');

router.get("/",indexController.indexGet)
router.post("/",indexController.indexPost)
router.get("/yemek/add",indexController.yemekAddGet)
router.post("/yemek/add",indexController.yemekAddPost)



module.exports=router;