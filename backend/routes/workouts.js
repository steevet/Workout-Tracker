//Calling the express package
const express = require('express')

const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController')

// const Workout = require('../models/workoutModel')

//Creates an instance of the router for us
const router = express.Router()

//Gets all workouts
//Using our workout model to create a new document
router.get('/', getWorkouts)

//Gets a single workout
router.get('/:id', getWorkout)

//Post a workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router