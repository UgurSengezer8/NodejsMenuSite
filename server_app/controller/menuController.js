const path = require('path');
const post = require('../routes/menuRoutes');
const Yemek = require('../models/Yemek')
const Menu = require('../models/Menu')

const db = require('../models/db');
const { log } = require('console');

module.exports.menuPost=function(req,res){
    req.files.post_image.mv(path.resolve(__dirname,'../../public/img/',req.files.post_image.name));
    var menu = new Menu({
        title:req.body.title,
        path:path.join('../../public/img/',req.files.post_image.name),
    })
    menu.save();
    console.log(req.files.post_image.name);
    Menu.find({}).then(menus=>{
        res.render('menus',{menus:menus})
    })
}
module.exports.menuGet=function(req,res){
    Menu.find({}).then(menus=>{
        res.render('menus',{menus:menus})
    })
}
module.exports.menuGetId=function(req,res){
    console.log(req.params.id);
    Menu.findById(req.params.id).then(menuss =>{
        Yemek.find({menu:menuss.id}).then(menu=>{
            console.log(menu);
            res.render('menus',{menus:menu})
        })
    })
}
module.exports.menuAddGet=function(req,res){
    res.render('menuAdd')
}