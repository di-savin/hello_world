const express = require('express')
const port = 8081
const app = express()

app.get('/', (req, res) => {
  res.send("hello, express!")
})

app.listen(port, () => {
  console.log('express web app on: http://localhost:%s', port)
})