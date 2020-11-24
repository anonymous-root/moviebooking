const mongoose = require('mongoose');
const scheme = new  mongoose.Schema({
    statename:
    {
        type:String,
        require:true
    }
});

const state = mongoose.model("state",scheme);
module.exports = state;