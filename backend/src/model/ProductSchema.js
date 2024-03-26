const mongoose = require('mongoose');
const setSchema =  new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    pmgsrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
   head: {
        type:String
        // required:true
   },
   
    price: {
        type: Number,
        required: true
    } 
   
})
const product = mongoose.model('product',setSchema);
module.exports = product;