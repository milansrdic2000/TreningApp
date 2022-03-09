const mongoose = require('mongoose')

const connectDb = async (MONGO_URI) => {
  return mongoose.connect(MONGO_URI)
}

module.exports = connectDb
