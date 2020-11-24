const mongoose = require('mongoose');

const scheme = new  mongoose.Schema({
    groupname:
    {
        type:String,
        require:true
    }
});

const group = mongoose.model("grouptb",scheme);
module.exports = group;