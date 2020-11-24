const mongoose = require('mongoose');

const userscheme = new  mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    address:{
        type:String
    },
    city_id:{
        type:String,
        require:true
    },
    state_id:{
        type:String,
        require:true
    },
    is_active:{
        type:Number
    }
});

const usertbl = mongoose.model("usertbl",userscheme);
module.exports = usertbl;