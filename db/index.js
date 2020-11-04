const mongoose = require('mongoose');

let fOneSchema = mongoose.Schema({
  
},{timestamps:true});

let fTwoSchema = mongoose.Schema({
  
},{timestamps:true});

let fThreeSchema = mongoose.Schema({
  
},{timestamps:true});

let fOne = mongoose.model('fOne', fOneSchema);
let fTwo = mongoose.model('fTwo', fTwoSchema);
let fThree = mongoose.model('fThree', fThreeSchema);

module.exports.fOne=fOne;
module.exports.fTwo=fTwo;
module.exports.fThree=fThree;