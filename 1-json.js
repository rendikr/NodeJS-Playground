const fs = require('fs')

/* write a data to json file */
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

/* read a json file */
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

/* challenge */
/*
  1. Load and parse the JSON data
  2. Change the name and age property using your info
  3. Stringify the changed object and overwrite the original data
*/
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Rendi K.'
data.age = 30

const updatedJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', updatedJSON)
