const mongoose = require('mongoose');

const moviebookingschema = new mongoose.Schema({
    booking_id:{
        type:String,
        require:true
    },
    seat_id:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
});

const moviebooking = mongoose.model("moviebookingtbl",moviebookingschema);
module.exports = moviebooking;