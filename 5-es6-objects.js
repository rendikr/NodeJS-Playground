// object property shorthand

const name = 'Rendi K.'
const userAge = 31

const user = {
  name,
  age: userAge,
  location: 'Jakarta'
}

// object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 10,
  salePrice: undefined
}

// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

// straightaway destructure the product input argument
const transction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transction('order', product)
