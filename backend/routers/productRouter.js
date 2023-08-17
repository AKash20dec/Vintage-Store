const express = require('express');
// initialize
const router=express.Router();
const Model = require('../models/productModel'); 

router.post('/add' , (req,res)=>{
       console.log(req.body);

       //saving data to mongoDb
       new Model(req.body).save()
       .then((result) => {
              res.json(result);
       }).catch((err) => {
              console.log(err);
              res.status(500).json(err);
       });
       

    
    });

//getall
router.get('/getall' , (req,res)=>{
       //fetching data 
       Model.find({})
       .then((result) => {
             res.json(result);
       }).catch((err) => {
             console.log(err);
             res.status(500).json(err);
       });
       });
       router.get('/getbyid/:id' , (req,res)=>{

              console.log(req.params.id);
              Model.findById(req.params.id)
              .then((result) => {
                    res.json(result);
              }).catch((err) => {
                    console.log(err);
                    res.status(500).json(err);
              });
              });



 module.exports = router;
