const express = require('express');
const app = express();
const state = require('../../model/state');
const city = require('../../model/city');
const movie = require('../../model/movietb');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
const router = express.Router();


//state apis
router.get('/getstates',async (req,res)=>{
    try{
        const states = await state.find({});
        res.send(states);
    }
    catch(error)
    {
        console.log(error.message);
    }
});

router.get('/getsinglestate/:id',async (req,res)=>{
    try{
        const states = await state.find({_id:req.params.id});
        res.send(states);
    }
    catch(error)
    {
        console.log(error.message);
    }
});

router.post('/addstate',async (req,res)=>{
    try{
        const states = await new state(req.body);
        await states.save();
        const state1 = await state.find({});
        res.send(state1);

    }
    catch(error)
    {
        console.log(error.message);
    }
});

router.put('/updatestate/:id',async (req,res)=>{
    try {
        const states = await state.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        const state1 = await state.find({});
        res.send(state1);
    } catch (error) {
        console.log(error.message);
    }
});

router.delete('/deletestate/:id', async (req,res)=>{
    try {
        const states = await state.findByIdAndDelete({_id:req.params.id});
        // const student1=await student.find({});
        res.send(states);
    } catch (error) {
        console.log(error);
    }
});






//city apis

router.get('/getcity',async (req,res)=>{
    try{
        const citys = await city.find({});
        res.send(citys);
    }
    catch(error)
    {
        console.log(error.message);
    }
});

router.get('/getsinglecity/:id',async (req,res)=>{
    try{
        const citys = await city.find({_id:req.params.id});
        res.send(citys);
    }
    catch(error)
    {
        console.log(error.message);
    }
});

router.post('/addcity',async (req,res)=>{
    try{
        const citys = await new city(req.body);
        await citys.save();
        city1 = await city.find({});
        res.send(citys);
    }
    catch(error)
    {
        console.log(error.message);
    }
});

router.put('/updatecity/:id',async (req,res)=>{
    try {
        const citys = await city.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        const city1 = await city.find({});
        res.send(city1);
    } catch (error) {
        console.log(error.message);
    }
});

router.delete('/deletecity/:id', async (req,res)=>{
    try {
        const citys = await state.findByIdAndDelete({_id:req.params.id});
        // const student1=await student.find({});
        res.send(citys);
    } catch (error) {
        console.log(error);
    }
});


//movieapi
router.get('/getmovie',async (req,res)=>{
    try {
        const movies = await movie.find({});
        res.send(movies);
    } catch (error) {
        console.log(error);
    }
});

router.get('/getsinglemovie/:id',async (req,res)=>{
    try {
        const movies = await movie.find({_id:req.params.id});
        res.send(movies);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/deletecity/:id', async (req,res)=>{
    try {
        const movies = await movie.findByIdAndDelete({_id:req.params.id});
        // const student1=await student.find({});
        res.send(movies);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
