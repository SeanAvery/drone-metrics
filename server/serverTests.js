import rp from 'request-promise'

const postOptiosn = {
  method: 'POST',
  uri :  'localhost:3344/append',
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
    if (res) console.log('succesful put',)
  } catch (err) {
    console.log('error in post request', err)
  }
}
