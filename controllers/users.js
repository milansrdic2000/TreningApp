const User = require('../models/user')

const addUser = async (req, res) => {
  try {
    let { ime, prezime, username, password } = req.body
    let user = {
      ime,
      prezime,
      username,
      password,
    }
    console.log(user)
    let marko = await User.create(user)
    console.log(marko)

    res.json({ success: true })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addUser,
}
