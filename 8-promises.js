const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

// add(3, 4).then((sum) => {
//   console.log(sum
//     )
//   add(sum, 5).then((sum2) => {
//     console.log(sum2)
//   }).catch((err) => {
//     console.log(err)
//   })
// }).catch((err) => {
//   console.log(err)
// })

add(1, 4).then((sum) => {
  console.log(sum)

  return add(sum, 2) // promise chaining, allow it to run the function and give the result for the next 'then'
}).then((sum2) => {
  console.log(sum2)
}).catch((err) => {
  console.log(err)
})
