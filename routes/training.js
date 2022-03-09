const express = require('express')
const router = express.Router()
const { addTraining, getTraining } = require('../controllers/training')

router.route('/').post(addTraining).get(getTraining)
module.exports = router
