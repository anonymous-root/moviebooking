const mongoose = require("mongoose");
const moviescheme = new mongoose.Schema({
    moviename:
    {
        type:String,
        require:true
    },
    releasedate:{
        type:Date,
        require:true
    },
    movie_status:{
        type:String,
        require:true
    },
    movie_category:{
        type:String,
        require:true
    },
    director_name:{
        type:String,
        require:true
    },
    Actors:{
        type:String,
        require:true
    },
    movie_description:{
        type:String,
        require:true
    },
    movie_logo:{
        type:String,
        require:true
    },
    movie_type:{
        type:String,
        require:true
    },
    booking_status:{
        type:String,
        require:true,
    }
});

const movietb = mongoose.model("movietb",moviescheme);
module.exports = movietb;