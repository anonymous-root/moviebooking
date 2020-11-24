const mongoose = require('mongoose');
const theaterscreenschema = new mongoose.Schema({
    theater_id:{
        type:String,
        require:true
    },
    movie_id:{
        type:String,
        require:true
    },
    screen_name:{
        type:String,
        require:true
    }
});
const theaterscreen = mongoose.model("theaterscreen",theaterscreenschema);
module.exports = theaterscreen;