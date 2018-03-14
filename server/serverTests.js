import rp from 'request-promise'

const newTripOptions = {
  method: 'GET',
  uri :  'http://localhost:3344/new_trip',
}

const data = {
  timestamp: Date.now(),
  angle: Math.round(Math.random() * 360),
  speed: Math.round(Math.random() * 100)
}

const appendOptions = (id, data) => {
  return {
    method: 'POST',
    uri :  'http://localhost:3344/append',
    body: {
      id: id,
      data: data
    },
    json: true
  }
}

const test = async () => {
  try {
    const id = await rp(newTripOptions)
    const options = appendOptions(id, data)
    const res = await rp(options)
    if (res) console.log('succesful put', res)
  } catch (err) {
    console.log('error in post request', err)
  }
}

test()
