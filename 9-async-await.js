const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('number must be positive number')
      }
      resolve(a + b)
    }, 2000)
  })
}

const doWork = async () => {
  const sum = await add(1, 3)
  const sum2 = await add(sum, -3)
  const sum3 = await add(sum2, 140)
  return sum3
}

doWork().then(result => console.log(result)).catch(err => console.log(err))
