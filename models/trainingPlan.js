const mongoose = require('mongoose')
const { TrainingSchema } = require('./training')
const TrPlanSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true],
  },
  brojDana: {
    type: Number,
  },
  brojCiklusa: {
    type: Number,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
  },
  isGlobal: {
    type: Boolean,
    default: true,
    required: true,
  },
  dani: {
    type: [
      {
        odmor: {
          type: Boolean,
          default: false,
          required: true,
        },
        trening_id: {
          type: mongoose.Types.ObjectId,
          ref: 'trainings',
        },
      },
    ],
  },
})

module.exports = mongoose.model('trainingPlans', TrPlanSchema)
