const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName:{
    type: String,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
    trim:true
  },
  accountType:{
      type: String,
      enum:["YouTuber","Editor"],
  },
  image:{
      type: String,
  },
});

module.exports = mongoose.model('User',User);