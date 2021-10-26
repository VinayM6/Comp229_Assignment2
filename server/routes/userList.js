/*
File Name - userList.js from routes 
Student Name - VinayKumar Mannem
Student Id - 301211306
Date - 20-10-2021
*/
var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let userController = require('../controllers/userList');

/* GET route for users list page - read operation */
router.get('/', requireAuth, userController.displayUserList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, userController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, userController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, userController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, userController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, userController.performDelete);

module.exports = router;
