// import the villager model in the controller
const Villager = require('../models/villager');

//c2-3 controller methods...

// getVillagers - get the list of 9 villagers
exports.getVillagers = (req, res, next) => {
    Villager.fetchVillagers()
        .then(villagers => {
            // will render the contents of the villager data
        })
        .catch(err => {
            console.log(err);
        });
};

// getVillager - get one of the villagers
exports.getVillager = (req, res, next) => {
    Villager.findById()
        .then(villager => {
            // will render the contents of the villager data
        })
        .catch(err => {
            console.log(err);
        });
};

// main landing page
exports.getIndex = (req, res, next) => {
    // for the main page
};