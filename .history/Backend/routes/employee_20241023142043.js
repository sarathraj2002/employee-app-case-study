const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
require('../db/connection')
const userModel=require('../model/userData')
router.use(express.json())

router.post('/login',async(req,res)=>{
    const user=await userModel.findOne({Username:req.body.Username})
    if(!user){
    return res.json({message:"user not found"})
    }
    try{
        if (user.Password==req.body.Password)
        {
            const payload={uname:req.body.Username,pwd:req.body.Password}
            const token=jwt.sign(payload,"secret")
            res.status(200).send({message:"Login successful",usertoken:token})
        }
    }catch(error){
        console.log(error)
    }
})

module