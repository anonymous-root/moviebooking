const mongoose = require('mongoose');
const timingschema = new mongoose.Schema({
    screen_time:{
        type:String,
        require:true
    },
    screen_date:{
        type:Date,
        require:true
    },
    duration_date:{
        type:Date,
        require:true
    },
    theater_Screen_id:{
        type:String,
        require:true
    }
});
const theatertiming = mongoose.model("theatertiming",timingschema);
module.exports = theatertiming;