/*
File Name - userList.js from controllers 
Student Name - VinayKumar Mannem
Student Id - 301211306
Date - 20-10-2021
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let User = require('../models/userList');

module.exports.displayUserList = (req, res, next) => {
    User.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('user/list', 
            {title: 'Business Contacts List', 
            UserList: userList,
            displayName: req.user ? req.user.displayName: ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('user/add', 
    {title: 'Add User',
    displayName: req.user ? req.user.displayName: ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newUser = User({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    User.create(newUser, (err, user) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the user list
            res.redirect('/user-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    User.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('user/edit', 
            {title: 'Edit User',
             user: userToEdit,
            displayName: req.user ? req.user.displayName: ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedUser = User({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    User.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the user list
            res.redirect('/user-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    User.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the user list
             res.redirect('/user-list');
        }
    });
}