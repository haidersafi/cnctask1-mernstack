// Task1:
localStorage.setItem('firstName','Safi');
console.log(`FirstName: ${localStorage.getItem('firstName')}`)

// Task2:
sessionStorage.setItem('lastName','Saqlain');
console.log(`LastName: ${sessionStorage.getItem('lastName')}`)

// Task3
const myObj={address:{address1:'karachi'}};
const {address:{address1:newAddress}}=myObj;
console.log(newAddress);

// Task4
const obj={address:{address1:'karachi',address2:'islamabad'}};
const newObj={...obj,address:{...obj.address,address1:'lahore'}};
console.log(newObj)