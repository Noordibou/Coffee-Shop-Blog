const express = require('express')
const path = require('path')
const CoffeeShop = require('./models/CoffeeShop')
const logger = require('morgan')
const cors = require('cors')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/coffeeShops')
const commentRoute = require('./routes/comments')
const verifyToken = require('./token')
const app = express()

require('dotenv').config()
require('./config/database')

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
}));
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/coffeeshops",postRoute)
app.use("/comments",commentRoute)

//image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname.split('.').pop());
//   },
// });

// const upload=multer({storage:storage})

// app.post("/upload",upload.single("file"),(req,res)=>{
//   // console.log(req.body)
//   res.status(200).json("Image has been uploaded successfully!")
// })

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});