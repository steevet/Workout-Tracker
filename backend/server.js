require('dotenv').config()

const express = require('express')

//Start up the express app, and it's being stored in app
const app = express()

//Listens for request
//port 4000
// app.listen(4000, () =>{
//     console.log('listen on port 4000');
// })
app.listen(process.env.PORT, () =>{
    console.log('listen on port', process.env.PORT);
})

//React to requests
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'});
})