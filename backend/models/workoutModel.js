//Mongeoose is what is required to create thise schemas
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//{} are objects
//A schema defines the structure of a document
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})
//When we try to create a new document it automatically tells us when it was created and updated

//Model name is 'Workout'
//This is the model based on the schema
//The model applies that schema to a particulat model, we use the model to interact with a collwction of that name
module.exports = mongoose.model('Workout', workoutSchema)