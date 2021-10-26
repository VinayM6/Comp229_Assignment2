/*
File Name - userList.js from models 
Student Name - VinayKumar Mannem
Student Id - 301211306
Date - 20-10-2021
*/
// require module for the User Model
let mongoose = require('mongoose');

//create a model class for businessUsersList collection
let userListModel = mongoose.Schema({
name: String,
phone: Number,
email: String
},
{
    collection: "businessUsersList"
});
//Export model to app.js file
module.exports = mongoose.model('BusinessUsers',userListModel);