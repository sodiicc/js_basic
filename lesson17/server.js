const express = require('express')
const cors = require('cors')
const app = express()
const port = 9000

app.use(cors())
app.use(express.json());

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.send({"data": "Server Works"})
})

app.get('/get', async (req, res) => {
  console.log('req.params', req.params.dfg)
  console.log('req.query', req.query)
  res.send({"data": "Hello From My server"})
})

app.put('/putMyServer', async (req, res) => {
  res.send("Hello From My server PUT")
})

app.post('/post', async (req, res) => {
  try {
    res.send({"name": "Hello From My server", "email": "vasyl@gmail.com"})    
  } catch (error) {
    res.status(500).send({"name": "Errorrrrrrrrrr"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})