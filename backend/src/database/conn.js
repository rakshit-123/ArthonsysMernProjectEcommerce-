const mongoose = require('mongoose');
require('../model/schema');
require('../model/ProductSchema');
    mongoose.connect('mongodb://localhost:27017/Arthonsys').then(()=>{
            console.log('database connected ');
    }).catch((e)=>{
        console.log('no connection',e);
    });
    