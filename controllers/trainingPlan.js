const TrainingPlan = require('../models/trainingPlan')
const mongoose = require('mongoose')
const addTrainingPlan = async (req, res) => {
  let trening = req.body
  await TrainingPlan.create(trening)
  res.json({ success: true })
}
const patchTr = async (req, res) => {
  await TrainingPlan.updateOne(
    {
      _id: mongoose.Types.ObjectId('622683098c0a837e9d8e62ca'),
    },
    {
      isGlobal: false,
      user_id: mongoose.Types.ObjectId('6223d8a51eaf68caa3f85d51'),
    }
  )
  res.json({ success: true })
}
const getTrainingPlans = async (req, res) => {
  const result = await TrainingPlan.find({})

  res.json({ success: true, data: result })
}

const getTrainingPlan = async (req, res) => {
  const trPlanId = req.params

  const result = await TrainingPlan.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(trPlanId),
      },
    },
    {
      $lookup: {
        from: 'trainings',
        localField: 'dani.trening_id',
        foreignField: '_id',
        as: 'Treninzi',
      },
    },
  ])
  res.json({ success: true, data: result })
}
const getTrainingPlanByUser = async (req, res) => {
  const { id } = req.params

  const result = await TrainingPlan.aggregate([
    {
      $match: {
        user_id: mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: 'trainings',
        localField: 'dani.trening_id',
        foreignField: '_id',
        as: 'Treninzi',
      },
    },
  ])

  res.json({ success: true, data: result })
}
module.exports = {
  addTrainingPlan,
  getTrainingPlans,
  getTrainingPlan,
  getTrainingPlanByUser,
  patchTr,
}
