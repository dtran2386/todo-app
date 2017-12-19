const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '../client')

const port = 8080

app.use(express.static(publicPath))

app.listen(port, (err) => {
  if (err) {
    return console.log(`could not establish a connection.`)
  }
  console.log(`app is listening on port ${port}`)
})
