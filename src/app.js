const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    console.log("Request: /")
    res.send('Hello world 2')
})

app.listen(port, () => {
    console.log(`Listening port${port}`)
})
