import express from 'express'
import bodyParser from 'body-parser'

const serverPort = 3344

/*
  REST API INTERFACE
*/

const app = express()
app.use(bodyParser.json())

/*
  returns:
    id: [32 byte hex string]
*/
app.get('/new_trip', async(req, res) => {
  const id = await tripID()
  res.send(id)
  res.end()
})

/*
  params: body [json]
    tripID: [32 bytes]
    data: [json]
      timeStamp: [unix timestamp number]
*/

app.post('/append', async (req, res) => {
  await append(req.body.id, JSON.stringify(req.body.data))
  const data = await getData(req.body.id)
  console.log(2, data)
  res.send(data)
  res.end()
})

/*
  DB INTERFACE
*/

import levelup from 'levelup'
import leveldown from 'leveldown'

const db = levelup(leveldown('./data'))

const append = (key, value) => {
  return new Promise((res, rej) => {
    db.put(key, value, (err) => {
      if (err) rej(err)
      res(true)
    })
  })
}

const getData = (key) => {
  return new Promise((res, rej) => {
    db.get(key, (err, value) => {
      if (err) rej(err)
      res(JSON.parse(value.toString()))
    })
  })
}

/*
  UTILS
*/

import crypto from 'crypto'

const tripID = () => {
  return new Promise((res, rej) => {
    crypto.randomBytes(32, (err, buf) => {
      if (err) rej(err)
      res(buf.toString('hex'))
    })
  })
}


// start server
app.listen(serverPort, () => {
  console.log(`server is listening on port ${serverPort}`)
})
