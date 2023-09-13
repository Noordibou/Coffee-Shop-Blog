const express = require('express');
const path = require('path');
const CoffeeShop = require('./models/coffeeShop')
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');

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
app.use(methodOverride('_method'));


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


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});