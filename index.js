const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('App Service three sais fuck you! 🖕')
})

app.get('/fasz', (req, res) => {
  res.send('kula 💩')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
