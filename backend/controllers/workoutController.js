const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//Get all workouts
const getWorkouts = async (req, res) => {
    //For instance this would get all the workouts where the reps is 20
    // const workouts = await Workout.find({reps: 20})

    //Gets all workouts
    //Sorting these arguments by when it was created. -1 mean descending order.
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//Get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    //If we don't have this nodemon will crash and say it's own error
    //input must be a 24 character hex string, 12 byte Uint8Array, or an integer
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'This workout does not exist'})
    }

    res.status(200).json(workout)
}

//Create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //Add doc to db
    try{
        //Want to try and create a new workout
        const workout = await Workout.create({title, load, reps})
        //Once that's dobe send a response, staus code 200, meaning success. Then send back a json, the workout object/docuemnt that we got back 
        res.status(200).json(workout)
    } catch (error){
        //Error code 400 is a error message. Then send back a json, an error message.
        res.status(400).json({error: error.message})
    }
}

//Delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    //Pass an object inside the argument
    //
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return res.status(400).json({error: 'This workout does not exist'})
    }

    res.status(200).json(workout)
}

//Update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({error: 'This workout does not exist'})
    }

    //Send back the 'workout' that was just updated 
    res.status(200).json(workout)
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}