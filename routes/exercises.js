const express = require('express')
const router = express.Router()

const { getExercises, addExercise } = require('../controllers/exercises')
router.route('/').get(getExercises).post(addExercise)
module.exports = router
