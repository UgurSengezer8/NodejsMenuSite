const path = require('path');
const post = require('../routes/indexRoutes');
const Yemek = require('../models/Yemek')
const Menu = require('../models/Menu')

const db = require('../models/db');

module.exports.indexGet=function(req,res){
    res.render('index',{mesaj:'işte kuzu kuzu geldin'})
}
module.exports.indexPost=function(req,res){
    console.log(req.body);
    res.render('index')
}
module.exports.yemekAddGet=function(req,res){
    console.log(req.body);
    Menu.find({}).then(menus=>{
        res.render('yemekAdd',{menus:menus})
    })
}
module.exports.yemekAddPost=function(req,res){
    req.files.post_image.mv(path.resolve(__dirname,'../../public/img/postimages/',req.files.post_image.name));
    var yemek = new Yemek({
        title:req.body.KullaniciAdi,
        fiyat:req.body.Sifre,
        menu:req.body.idd,
        yemeks:req.body.yemeks,
        path:path.join('../../public/img/postimages/',req.files.post_image.name),
    })
    yemek.save();
    console.log(req.body);
    Menu.find({}).then(menus=>{
        res.render('yemekAdd',{menus:menus})
    })
}