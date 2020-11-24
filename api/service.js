const express = require('express');
const app = express();
require("./model/mongoose");
const adminservice = require('./router/admin/adminservices');
const cors = require('cors');

app.use(express.json());
app.use(adminservice);
app.use(cors());

app.listen('5000',(err)=>{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log('server running at port no 5000');
    }
})