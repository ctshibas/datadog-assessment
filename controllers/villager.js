// import the villager model in the controller
const Villager = require('../models/villager');

//c2-3 controller methods...

// getVillagers - get the list of 9 villagers
exports.getVillagers = (req, res, next) => {
    res.send('<h1>all villagers selected</h1>')
    console.log('<h1>all villagers selected</h1>')
//     Villager.fetchVillagers()
//         .then(villagers => {
//             // will render the contents of the villager data
//             console.log(villagers)
//         })
//         .catch(err => {
//             console.log(err);
//         });
};

// getVillager - get one of the villagers
exports.getVillager = (req, res, next) => {
    res.send('<h1>One villager selected</h1>')
    alert('<h1>One villager selected</h1>')
    // Villager.findById()
    //     .then(villager => {
    //         // will render the contents of the villager data
    //         console.log(villagers)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
};

// main landing page
exports.getIndex = (req, res, next) => {
    // for the main page
    res.send('<h1>Success!</h1>');
    console.log('<h1>all villagers selected</h1>')
};