const path = require('path')
const express = require('express')

// controller to import (villager)
const villagerController = require('../controllers/villager')

// setup router library from express
const router = express.Router()

// main routes for the web solution
router.get('/', villagerController.getIndex)
router.get('/about-me', villagerController.getAuthor)
// router.get('/villagers', villagerController.getVillagers)
router.get('/villagers/:villagerId', villagerController.getVillager)

// export module
module.exports = router;
