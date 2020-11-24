const mongoose = require('mongoose');
const bookingschema = new mongoose.Schema({
    movie_id:{
        type:String,
        require:true
    },
    user_id:{
        type:String,
        require:true
    },
    booking_date:{
        type:Date,
        require:true
    },
    booking_time:{
        type:String,
        require:true
    },
    total:{
        type:Number,
        require:true
    }
});

const booking = mongoose.model("bookingtb",bookingschema);
module.exports = booking;