const express = require('express');
const path = require('path');
const logger = require('morgan');
const CoffeeShop = require('./models/coffeeShop');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
   
app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(express.static(path.join(__dirname, 'build')));


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
app.listen(3001, ()=>{
  console.log('listening...');
});

mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod...');
});