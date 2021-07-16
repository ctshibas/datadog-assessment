const mongodb = require('mongodb')
const { getDb } = require('../util/database')
// const { mongoConnect } = require('../util/database')


// Object to correct id data type from mongodb
const ObjectId = mongodb.ObjectID

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

        // id for mongodb objects
        this._id = id ? new ObjectId(id) : null
    }

    // function to display the data of the villagers, possible limit the result and make it random selection
    static fetchVillagers() {

        // use const for connection
        const db = getDb()

        // return result of the query
        return db
            .collection('villagers')
            .find()
            .limit(8)
            .skip(3)
            .toArray()
            .then(villagers => {
                return villagers
            })
            .catch(err => console.log(err));

    }

    // find villagers by id (will be hidden on view)
    static findById(villagerID) {
        const db = getDb()

        // return products that have this id
        // matches on product with find descriptors
        return db
            .collection('villagers')
            .find({ _id: new ObjectId(villagerID) })
            .next()
            .then(villager => {
                // console.log(villager)
                return villager
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
