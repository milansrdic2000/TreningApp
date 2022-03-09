const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { ExerciseSchema } = require('./exercise')

const Sets = new mongoose.Schema({
  kilaza: {
    type: Number,
  },
  odmor: {
    type: Number,
  },
  trajanje: {
    type: Number,
  },
  ponavljanje: {
    type: Number,
  },
  unilateralno: {
    type: Boolean,
  },
})
const TrainingSchema = new mongoose.Schema({
  imeTreninga: {
    type: String,
  },
  vezbe: {
    type: [
      {
        vezba_id: {
          type: mongoose.Types.ObjectId,
          ref: 'exercises',
          required: true,
        },
        serije: [Sets],
      },
    ],
    required: true,
  },
})

module.exports = {
  TrainingSchema,
  Training: mongoose.model('trainings', TrainingSchema),
}
