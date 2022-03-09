const mongoose = require('mongoose')

/* const requiredString = {
 type:String,
 required:[true]
} */
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Morate uneti username'],
  },
  password: {
    type: String,
    required: [true, 'Morate uneti sifru'],
  },
  ime: {
    type: String,
    required: [true, 'Morate uneti ime'],
  },
  prezime: {
    type: String,
    required: [true, 'Morate uneti prezime'],
  },
  trPlan: {
    type: [
      {
        naziv: String,
        dani: Number,
      },
    ],
  },
})

module.exports = mongoose.model('users', UserSchema)
