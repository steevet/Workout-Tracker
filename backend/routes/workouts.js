//Calling the express package
const express = require('express')

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
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
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router