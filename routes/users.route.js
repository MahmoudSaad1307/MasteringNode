const express = require("express");
const router = express.Router(); 
const { getAllUsers, registerUser, loginUser } = require("../controllers/users.controllers");
const verifyToken = require("../middleware/verifyToken");

router.get("/",verifyToken,getAllUsers)
router.post("/register",registerUser)
router.post("/login",loginUser)

module.exports=router;