setTimeout(() => {
  console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

/**
 * geocode callback function
 * @param {String} address
 * @param {function} callback
 */
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }

    // call the second argument (a function)
    callback(data)
  }, 2000)
}

// set the first argument as an address string
// set the second argument as a function
geocode('Jakarta', (data) => {
  console.log(data)
})

// sum callback function
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum)
})
