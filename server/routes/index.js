// File name: index.js
// Name: Krunal Parmar
// Student Id: 301146813
// Date: 02/03/2021
// COMP229-MidTerm-301146813
// Copyright © 2021 Centennial College. All rights reserved.

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
