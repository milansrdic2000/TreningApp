const express = require('express')
const {
  addTrainingToSession,
  getTrainingSession,
} = require('../controllers/trainingSession')
const router = express.Router()

router.route('/').post(addTrainingToSession)
router.route('/:id').get(getTrainingSession)
module.exports = router
