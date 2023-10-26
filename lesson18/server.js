const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb')
const port = 9000

const uri = "mongodb+srv://kyrylko09:NKimnzatcROuCupl@cluster0.h2b9rlm.mongodb.net/"

app.use(cors())
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

const lessonDb = client.db('lessons')
const notesCollection = lessonDb.collection('notes')

app.get('/', async (req, res) => {
  res.send({"data": "Server Works NOdemon"})
})

app.get('/notes', async (req, res) => {
  const notes = await notesCollection.find().toArray()
  console.log('notes', notes)
  res.send(JSON.stringify(notes))
})

// app.get('/get', async (req, res) => {
//   console.log('req.params', req.params.dfg)
//   console.log('req.query', req.query)
//   res.send({"data": "Hello From My server"})
// })

// app.put('/putMyServer', async (req, res) => {
//   res.send("Hello From My server PUT")
// })

app.post('/note', async (req, res) => {
  console.log('req.body', req.body)
  notesCollection.insertOne(req.body)
  try {
    res.send({"name": "Hello From My server", "email": "vasyl@gmail.com"})    
  } catch (error) {
    res.status(500).send({"name": "Errorrrrrrrrrr"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})