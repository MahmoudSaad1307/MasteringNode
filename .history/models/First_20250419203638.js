import { Schema } from 'mongoose'
import {mongoose} from '../index'

  const scheme=mongoose.Schema
  const articleScheme=new Schema({
title:String,
date:Number,


  })
exportconst article=mongoose.model('Article',articleScheme)


  