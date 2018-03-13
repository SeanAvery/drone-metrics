import rp from 'request-promise'

const postOptions = {
  method: 'POST',
  uri :  'http://localhost:3344/append',
  body: {
    0: {
      gps: 0,
      meta: 'look at this data point'
    }
  },
  json: true
}

const test = () => {
  try {
    const res = rp(postOptions)
    if (res) console.log('succesful put', res.body)
  } catch (err) {
    console.log('error in post request', err)
  }
}

test()
