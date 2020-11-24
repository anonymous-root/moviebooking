const mongoose = require('mongoose');
const moviereviewschema = new mongoose.Schema({
    user_id:{
        type:String,
        require:true
    },
    movie_id:{
        type:String,
        require:true
    },
    rate:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    }
});

const moviereview = mongoose.model("moviereview",moviereviewschema);
module.exports = moviereview;