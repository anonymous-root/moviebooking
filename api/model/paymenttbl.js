const mongoose = require('mongoose');

const paymentschema = new mongoose.Schema({
    payment_mode:{
        type:String,
        require:true
    },
    payment_status:{
        type:String,
        require:true
    },
    booking_id:{
        type:String,
        require:true
    }  
});

const paymenttb = mongoose.model("paymenttb",paymentschema);
module.exports = paymenttb;