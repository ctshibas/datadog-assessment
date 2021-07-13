// import mongoose
// const mongoose = require('mongoose')
const mongodb = require('mongodb')
const getDb = require('../util/database').getDb

// Object to correct id data type from mongodb
const ObjectID = mongodb.ObjectID

class Villager {

    // ctor function for Villager Object
    constructor(name, species, birthdayString, personality, catchphrase, hobby, saying, subtype, villagerID, id) {
        this.name = name
        this.species = species
        this.birthdayString = birthdayString
        this.personality = personality
        this.catchphrase = catchphrase
        this.hobby = hobby
        this.saying = saying
        this.subtype = subtype
        this.villagerID = villagerID

        // id
        this._id = id ? new mongodb.ObjectID(id) : null
    }

    // function to display the data of the villagers, possible limit the result and make it random selection
    static fetchVillagers() {

        // use const for connection
        const db = getDb()

        // return result of the query
        return db
            .collection('villagers')
            .aggregate([{ $sample: { size: 9 }}])
            .find()
            .toArray()
            .then(villagers => {
                console.log(villagers)
                return villagers
            })
            .catch(err => console.log(err));

    }

}

module.exports = Villager

// create data schema for villager
// const Schema = mongoose.Schema;

// initialize schema, holds attributes for villager
// mirrors the api call data format for villagers
// const villagerSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     species: {
//         type: String,
//         required: true
//     },
//     personality: {
//         type: String,
//         required: true
//     },
//     catchphrase: {
//         type: String,
//         required: true
//     },
//     hobby: {
//         type: String,
//         required: true
//     },
//     saying: {
//         type: String,
//         required: true
//     }
// })