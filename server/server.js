import express from 'express'
const serverPort = 3344

const app = express()

app.post('/append', (req, res) => {
  console.log('received data', req)
  res.end('yooo, it worked')
})

app.listen(serverPort, () => {
  console.log(`server is listening on port ${serverPort}`)
})
