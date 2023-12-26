const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/dashboard', require('./routers/dashboard'))

app.use('/discover', require('./routers/discover'))

app.use('/auth', require('./routers/auth'))

app.listen(3000, (a, b) => {
    console.log("Starting on 3000", a, b)
})
