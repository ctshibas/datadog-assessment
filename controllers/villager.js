// import the villager model in the controller
const Villager = require('../models/villager');

//2-3 controller methods...

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
    const villagerId = req.params.villagerId
    
    // rendering test
    Villager.findById(villagerId)
        .then(villager => {
            // will render the contents of the villager data
            res.render('cards/villager-detail', {
                pageTitle: 'Villager Detail: ' + villager.name['name-USen'],
                path: '/',
                villager: villager
            })
        })
        .catch(err => {
            console.log(err);
        });
};

// main landing page
exports.getIndex = (req, res, next) => {
    
    // rendering test
    Villager.fetchVillagers()
    .then(villagers => {
        // console.log(villagers[0].name['name-USen'])
        res.render('cards/index', {
            pageTitle: 'ACNH Card Collection!',
            path: '/',
            villagers: villagers
        });
    })
    .catch(err => {
        console.log(err);
    });
};