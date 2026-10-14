const express = require('express')
const router = express.Router();

const {allUsers, createUser} = require('../controller/user.js');
const logger = require('../middleware/logger.js')

router.get('/allUsers', allUsers)
router.post('/createUser/:id', createUser)

module.exports =  router