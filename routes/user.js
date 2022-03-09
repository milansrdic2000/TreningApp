const express = require('express')
const router = express.Router()

const { getTrainingPlanByUser } = require('../controllers/trainingPlan')

router.route('/plans').get(getTrainingPlanByUser)

module.exports = router
