const express = require('express')
const bodyparser = require('body-parser')
const cors = require ('cors')
const morgan = require('morgan')

const port = 8081


const app = express();
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world !'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })