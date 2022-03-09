const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

//db
const connectDb = require('./db/connectDb')

//routes
const registerRoute = require('./routes/register')
const exerciseRoute = require('./routes/exercises')
const trainingRoute = require('./routes/training')
const trainingPlanRoute = require('./routes/trainingPlan')
const trainingSession = require('./routes/trainingSession')
const userRoute = require('./routes/user')
app.use(express.json())
app.use(cors())

/* const url = require('url')
const proxy = require('express-http-proxy')

// New hostname+path as specified by question:
const apiProxy = proxy('https://elastic-euler-0d90f2.netlify.app/', {
  proxyReqPathResolver: (req) => url.parse(req.baseUrl).path,
})

console.log(apiProxy) */
/* app.get('http://localhost:8000/trening/', (req, res) => {
  res.send('nesto')
}) */

//app.use('/', express.static('./ptest'))
app.use('/register', registerRoute)
app.use('/exercises', exerciseRoute)
app.use('/training', trainingRoute)
app.use('/trainingplan', trainingPlanRoute)
app.use('/trainingsession', trainingSession)
//app.use('/user', userRoute)

app.get('/da', (req, res) => {
  res.send('dadarin')
})
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)

    app.listen(5000, () => {
      console.log(`pazljivo slusam na ${5000}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()
