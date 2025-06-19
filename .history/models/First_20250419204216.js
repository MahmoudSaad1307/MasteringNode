// import { Schema } from 'mongoose'
const mongoose = require("mongoose");

  const scheme=mongoose.Schema
  const articleScheme=new Schema({
title:String,
date:Number,


  })
const article=mongoose.model('Article',articleScheme)

module.exports= article


  