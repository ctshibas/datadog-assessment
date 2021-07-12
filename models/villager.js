// import mongoose
const mongoose = require('mongoose');

// create data schema for villager
const Schema = mongoose.Schema;

// initialize schema, holds attributes for villager
// mirrors the api call data format for villagers
const villagerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    personality: {
        type: String,
        required: true
    },
    catchphrase: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    saying: {
        type: String,
        required: true
    }
})