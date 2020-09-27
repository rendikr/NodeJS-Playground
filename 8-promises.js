const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('This is my promise error')
    // resolve([1, 4, 7])
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('Success!', result)
}).catch((error) => {
  console.error('Error!', error);
})
