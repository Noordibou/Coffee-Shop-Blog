const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const CoffeeShop = require('./models/coffeeShop')
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
// Connect to the database
require('./config/database');
   
const app = express();
   
app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


// Put API routes here, before the "catch all" route
app.get('/coffeeshops', (req, res)=>{
  CoffeeShop.find({})
  .then((foundCoffeeShop) => {
      res.json(foundCoffeeShop)
  })
});

app.post('/coffeeshops', (req, res)=>{
  CoffeeShop.create(req.body)
  .then((createdShop)=>{
      res.json(createdShop)
  })
});

app.put('/coffeeshops/:id', (req, res)=>{
  CoffeeShop.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedShop)=>res.json(updatedShop))
});

app.get('/coffeeshops/:id', (req, res)=>{
  CoffeeShop.findById(req.params.id)
  .then((foundShop)=>res.json(foundShop))
});


app.delete('/coffeeshops/:id', (req, res)=>{
  CoffeeShop.findByIdAndRemove(req.params.id)
  .then((deletedShop)=>res.json(deletedShop))
});


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
 console.log(`Express app running on port ${port}`)
});