const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
require('../db/connection')
const userModel=require('../model/userData')
router