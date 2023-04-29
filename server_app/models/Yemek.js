const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:String,
    yemeks:[{type:String}],
    fiyat:String,
    path:String,
    menu:String
});
module.exports=mongoose.model('Yemek',PostSchema)

