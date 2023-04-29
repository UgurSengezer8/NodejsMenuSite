const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    title:String,
    path:String
});
module.exports=mongoose.model('Menu',MenuSchema)

