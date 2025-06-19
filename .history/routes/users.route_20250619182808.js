const express = require("express");
const { getAllUsers } = require("../controllers/users.controllers");
const router = express.Router(); 

router.get("/",getAllUsers)
router.post("/register",)
router.post("/login",(req,res)=>{})