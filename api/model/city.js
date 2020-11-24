const mongoose = require('mongoose');

const cityscheme = new  mongoose.Schema({
    city_name:{
        type:String,
        require:true
    },
    state_id:{
        type:String,
        require:true
    }
});

const city = mongoose.model("city",cityscheme);
module.exports = city;