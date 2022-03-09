const { default: mongoose } = require('mongoose')
const Session = require('../models/trainingSession')

const addTrainingToSession = async (req, res) => {
  const { user_id, plan_id, isGlobal, newTraining } = req.body

  let sesija = {
    user_id,
    plan_id,
    isGlobal,
  }

  const result = await Session.findOneAndUpdate(
    {
      user_id: mongoose.Types.ObjectId(user_id),
      plan_id: mongoose.Types.ObjectId(plan_id),
    },
    {
      $set: sesija,
      $push: { completedTrainings: newTraining },
    },
    { upsert: true, new: true }
  )

  res.json({ success: true, data: result })
}

const getTrainingSession = async (req, res) => {
  const { id: ses_id } = req.params

  const result = await Session.find({ _id: mongoose.Types.ObjectId(ses_id) })
  res.json({ success: true, data: result })
}
module.exports = {
  addTrainingToSession,
  getTrainingSession,
}
