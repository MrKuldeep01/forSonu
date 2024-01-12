var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
/* GET users listing. */
    mongoose.connect("mongodb://127.0.0.1:27017/userDataBase");
    console.log("mongodb Reached!");

    mongoose.connection.on("disconnected", () => {
      console.log("mongoDB disconnected");
    });
    mongoose.connection.on("connected", () => {
      console.log("mongoDB connected");
    });

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },

});

module.exports = mongoose.model('user',userSchema);