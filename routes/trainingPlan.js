const express = require('express')
const router = express.Router()
const {
  addTrainingPlan,
  getTrainingPlans,
  getTrainingPlan,
  getTrainingPlanByUser,
  patchTr,
} = require('../controllers/trainingPlan')

router.route('/').post(addTrainingPlan).get(getTrainingPlans).patch(patchTr)
router.route('/:id').get(getTrainingPlan)
router.route('/user/:id').get(getTrainingPlanByUser)

module.exports = router
