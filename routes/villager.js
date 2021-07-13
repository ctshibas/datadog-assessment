const path = require('path')
const express = require('express')

// controller to import (villager)
const villageController = require('../controllers/villager')

// setup router library from express
const router = express.Router()

// main routes for the web solution
// router.get('/', villageController.getIndex)

// router.get('/villagers', villagerController.getVillagers)

// router.get('/villagers/:villagerId', villagerController.getVillager)

// export module
module.export = router;
