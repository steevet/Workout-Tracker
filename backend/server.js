//'npm install dotenv'
require('dotenv').config()

//Calling the express package
const express = require('express')
const workoutRoutes = require('./routes/workouts')

//Start up the express app, and it's being stored in app
const app = express()

//middleware
//Writes down on the terminal your requests.
// EX: / GET
// / GET
// / POST
// / POST
// /hello POST

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//To test the API
// //React to requests
// //Route handler
// // '/' is the root, so just 'localhost:4000' it's going to run the function (req, res) to handle the request
// //Request and Response objects
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app'});
// })

//It grabs all the different routes attached to the router
//When testing on 'postman' make sure to put 'http://localhost:4000/api/workouts/' 
app.use('/api/workouts/', workoutRoutes)

//Listens for request
//port 4000
// app.listen(4000, () =>{
//     console.log('listen on port 4000');
// })
//Can also run using the a script from 'package.json'. 'npm run dev'
app.listen(process.env.PORT, () =>{
    console.log('listen on port', process.env.PORT);
})

