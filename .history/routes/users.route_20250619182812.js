const express = require("express");
const { getAllUsers, registerUser } = require("../controllers/users.controllers");
const router = express.Router(); 

router.get("/",getAllUsers)
router.post("/register",registerUser)
router.post("/login",(req,res)=>{})