//Calling the express package
const express = require('express')

//Creates an instance of the router for us
const router = express.Router()

//Gets all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//Gets a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//Post a workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router