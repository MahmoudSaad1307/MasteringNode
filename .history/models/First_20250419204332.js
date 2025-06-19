const mongoose = require("mongoose");
const { Schema } = 'mongoose'

  const scheme=mongoose.Schema
  const articleScheme=new Schema({
title:String,
date:Number,


  })
const article=mongoose.model('Article',articleScheme)

module.exports= article


  