// standard function
// const square = function (x) {
//   return x * x
// }

// arrow function
// const square = (x) => {
//   return x * x
// }

// one line arow function
// const square = (x) => x * x

// console.log(square(3))

const event = {
  name: 'Birthday Party',
  guestList: ['Rendi', 'Mila', 'Al', 'Zani'],
  printGuestList() {
    console.log('Guest list for ' + this.name)
    // arrow function did not bind their own 'this' value
    // to be able to use 'this' value, better to use the 'function' approach

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()
