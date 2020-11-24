const mongoose = require('mongoose');

const usergroupschema = new  mongoose.Schema({
    group_id:{
        type:String,
        require:true
    },
    user_id:{
        type:String,
        require:true
    }  
});

const usergroup = mongoose.model("usergroup",usergroupschema);
module.exports = usergroup;