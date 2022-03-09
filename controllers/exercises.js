const mongoose = require('mongoose')
const { Exercise } = require('../models/exercise')

const addExercise = async (req, res) => {
  const { imeVezbe, misici, linkVideo } = req.body
  const vezba = {
    imeVezbe,
    misici,
    linkVideo,
  }

  await Exercise.create(vezba)
  res.json({ success: true })
}
const getExercises = async (req, res) => {
  const result = await Exercise.find({})
  res.json({ success: true, data: result })
}

module.exports = {
  addExercise,
  getExercises,
}
