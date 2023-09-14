const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const CoffeeShop = require('./models/coffeeShop')
// const favicon = require('serve-favicon');
// const logger = require('morgan');
const cors = require('cors')

require('dotenv').config();
// Connect to the database
// require('./config/database');
   
const app = express();
   
// app.use(logger('dev'));
app.use(express.json());
app.use(cors())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));



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
  const indexPath = path.resolve(__dirname, '..', 'client', 'build', 'index.html');
  res.sendFile(indexPath);
});

app.get('/', function(req, res) {
  res.send('Server is running')
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
app.listen(3001, ()=>{
  console.log('listening...');
});

mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod...');
});