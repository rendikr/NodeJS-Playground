const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=5ec956c24e2a6a7adb9c59ce3cb09e03&query=45,-75'

const request = http.request(url, (response) => {
  let data = ''

  // define what to do with the response data
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  // define what to do when the request has finished
  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body.location.name)
    console.log(`Current temperature is ${body.current.temperature} degrees`)
  })
})

// define what to do when an error occurs
request.on('error', (err) => {
  console.log('An error', err)
})

// trigger the request to run
request.end()

