const mongoose = require('mongoose')

const ExerciseSchema = mongoose.Schema({
  imeVezbe: {
    type: String,
    required: [true],
    unique: true,
  },
  misici: [
    {
      type: String,
      enum: [
        'kvadriceps',
        'zadnja loža',
        'gluteus',
        'list',
        'grudi',
        'rame',
        'triceps',
        'leđa',
        'trapezius',
        'latisimus',
        'biceps',
        'podlaktica',
        'core',
        'trbušnjaci',
        'donja ledja',
      ],
    },
  ],
  linkVideo: {
    type: String,
  },
})

module.exports = {
  Exercise: mongoose.model('exercises', ExerciseSchema),
  ExerciseSchema,
}
