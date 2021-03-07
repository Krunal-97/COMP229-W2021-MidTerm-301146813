// File name: books.js
// Name: Krunal Parmar
// Student Id: 301146813
// Date: 02/03/2021
// COMP229-MidTerm-301146813
// Copyright © 2021 Centennial College. All rights reserved.

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
