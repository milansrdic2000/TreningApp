const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
  },
  isGlobal: {
    type: Boolean,
    default: true,
    required: true,
  },
  plan_id: {
    type: mongoose.Types.ObjectId,
    ref: 'trainingPlans',
    required: true,
  },
  completedTrainings: {
    type: [
      {
        tr_id: {
          type: mongoose.Types.ObjectId,
          ref: 'trainings',
          required: true,
          unique: true,
        },
        trTime: {
          type: Number,
          required: true,
        },
        completedSets: [
          {
            set_id: {
              type: mongoose.Types.ObjectId,
            },
            ponavljanje: {
              type: Number,
            },
            kilaza: {
              type: Number,
            },
            trajanje: {
              type: Number,
            },
            odmor: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
})

module.exports = mongoose.model('sessions', SessionSchema)
