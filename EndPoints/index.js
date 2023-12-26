const express = require('express')
const app = express()

const main = require('./routers/main')
app.use('/', main)

const auth = require('./routers/auth')
app.use('/auth', auth)
  
app.listen(3000)
