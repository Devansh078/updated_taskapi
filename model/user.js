const  mongoose = require('mongoose');
const validator = require('validator');
//var Schema = mongoose.Schema;
//const userSchema  = new Schema({
const userSchema = mongoose.Schema({
desc:{
type:String,
require:true
},
title:{
type:String,
require:true
},
date:{
type:Date,
default:Date.now}
});
module.exports = mongoose.model('users',userSchema);
//module.exports = usermodel;