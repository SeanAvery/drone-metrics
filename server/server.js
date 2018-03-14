import express from 'express'
import bodyParser from 'body-parser'
const serverPort = 3344

/*
  REST API INTERFACE
*/

const app = express()
app.use(bodyParser.json())

/*
  params: body [json]
    tripID: [32 bytes]
    data: [json]
      timeStamp: [unix timestamp number]
*/
app.post('/append', async (req, res) => {
  console.log('received data', req.body)
  await append()
  res.end('yooo, it worked')
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


/*
  UTILS
*/

import crypto from 'crypto'

const tripID = () => {
  crypto.randomBytes(32, (err, buf) => {
    if (err) throw err
    console.log('buf', buf.toString('hex'))
    return but.toString('hex')
  })
}


// start server
app.listen(serverPort, () => {
  console.log(`server is listening on port ${serverPort}`)
})
