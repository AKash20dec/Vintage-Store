const express = require('express');
// initialize
const router=express.Router();
const Model = require('../models/userModel'); 
const { model } = require('mongoose');

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
 //get by id
 // colon denotes a url parameter
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

        router.get('/getbyemail/:email',(req,res)=>{
              Model.find({email:req.params.email})
              .then((result) => {
                     res.json(result);
                   })
                   .catch((err) => {
                     res.status(500).json(err);
              });
        });

        router.delete('/delete/:id',(req,res)=>{
            Model.findByIdAndDelete(req.params.id)
            .then((result) => {
                  res.json(result);
            }).catch((err) => {
                  console.log(err);
                  res.status(500).json(err);
            });
        }

        );

        router.put('/update/:id',(req,res)=>{
            Model.findByIdAndUpdate(req.params.id, req.body,{new:true})
            .then((result) => {
                  res.json(result);
            }).catch((err) => {
                  console.log(err);
                  res.status(500).json(err);
            });
        });

        router.post('/authenticate' , (req,res)=>{
            Model.findOne(req.body)
            .then((result)=>{
                  if(result !==null) res.json(result);
                  else res.status(401).json({message :'login failed'})
            })
            .catch((err)=>{
                  console.log(err);
                  res.status(500).json(err);
            });
        });


 module.exports = router;
