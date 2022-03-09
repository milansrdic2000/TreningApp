const { Training } = require('../models/training')

const addTraining = async (req, res) => {
  const { imeTreninga, vezbe } = req.body
  const trening = {
    imeTreninga,
    vezbe,
  }
  await Training.create(trening)
  res.json(trening)
}
const getTraining = async (req, res) => {
  const rezultat = await Training.find({})
  res.json({ success: true, data: rezultat })
}

module.exports = {
  addTraining,
  getTraining,
}
