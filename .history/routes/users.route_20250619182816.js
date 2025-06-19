const express = require("express");
const { getAllUsers, registerUser, loginUser } = require("../controllers/users.controllers");
const router = express.Router(); 

router.get("/",getAllUsers)
router.post("/register",registerUser)
router.post("/login",loginUser)