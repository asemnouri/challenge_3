const mongoose = require('mongoose');

let fOneSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
}, { timestamps: true });

let fTwoSchema = mongoose.Schema({
  lineOne: String,
  lineTwo: String,
  city: String,
  state: String,
  zipCode: Number
}, { timestamps: true });

let fThreeSchema = mongoose.Schema({
  card: Number,
  expDate: String,
  cvv: Number,
  billingZipCode: Number
}, { timestamps: true });

let fOne = mongoose.model('fOne', fOneSchema);
let fTwo = mongoose.model('fTwo', fTwoSchema);
let fThree = mongoose.model('fThree', fThreeSchema);

module.exports.fOne = fOne;
module.exports.fTwo = fTwo;
module.exports.fThree = fThree;