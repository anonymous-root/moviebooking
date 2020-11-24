const mongoose = require('mongoose');

const screenseatschema = new mongoose.Schema({
    screen_time_id:{
        type:String,
        require:true
    },
    seat_type:{
        type:String,
        require:true
    },
    rows:{
        type:Number,
        require:true
    },
    cols:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
});

const screenseat = mongoose.model("screenseat",screenseatschema);
module.exports = screenseat;