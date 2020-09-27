const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my callback error', undefined)
    callback(undefined, [1, 4, 7])
  }, 2000)
}

doWorkCallback((error, result) => {
  if (error) {
    return console.error(error)
  }

  console.log(result)
})
