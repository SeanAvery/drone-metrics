import express from 'express'
import bodyParser from 'body-parser'
const serverPort = 3344

const app = express()
app.use(bodyParser.json())

app.post('/append', (req, res) => {
  console.log('received data', req.body)
  res.end('yooo, it worked')
})

app.listen(serverPort, () => {
  console.log(`server is listening on port ${serverPort}`)
})
