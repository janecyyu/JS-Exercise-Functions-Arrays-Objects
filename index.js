// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 *
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 *
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
function addNumbers(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 *
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 *
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
  /* code here */

   return {id:id,name:name,email:email};
}
console.log(makePersonObject(5,"Leia","leia@leia.com"));

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(user) {
  /* code here */
  return "Hello, my name is " + user.name + ".";
}
const user = [{
  name: "Jane",
  age: 10
}];
console.log(getName(user));
/**
 * ### Challenge `makeSmartPerson`
 *
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/


function makeSmartPerson(nameHere) {
  /* code here */
  function speakName() {
    /* code here */
    return "Hello, my name is " + nameHere + ".";
  }
  return {name: nameHere, sum: addNumbers, speak: speakName};
}
console.log(makeSmartPerson("Andy").sum(1, 2));




/*
// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/
/**
  * ### Example Array Challenge:
  * 
  * @instructions
  * get3rdCar() should return the string `The car is a Land Rover Defender Ice Edition`
  * 
  *
  * NOTE: This example has been completed for you.
**/
function get3rdCar(inventory) {
  const the3rd = inventory.find((item, index) => {
    return index === 2 // we use 2 because index is zero-based.
  })
  return `The car is a ${the3rd.car_make} ${the3rd.car_model}`
}

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 }
]
/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(inventory, index) {
  /* code here */
  return `This is a ${inventory[index].car_make} ${inventory[index].car_model}`;
  // return "This is a " + inventory[index].car_make;
}
console.log(getCarInfoByIndex(inventory, 0));

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(arr) {
  /* code here */
  var make = arr[arr.length-1].car_make;
  var model = arr[arr.length-1].car_model;
  return `This is a ${make} ${model}`;
  
}
console.log(getLastCarInfo(inventory));

/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(inventory, num) {
  /* code here */
  var make = inventory[num-1].car_make;
  var model = inventory[num-1].car_model;
  return `This is a ${make} ${model}`;
}
console.log(getCarInfoById(inventory,1));

/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/
function sortCarInventory(arr) {
  /* code here */
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const modelA = a.car_model.toUpperCase();
    const modelB = b.car_model.toUpperCase();

    let comparison = 0;
    if (modelA > modelB) {
      comparison = 1;
    } else if (modelA < modelB) {
      comparison = -1;
    }
    return comparison;
  }
  return arr.sort(compare);
}
console.log(sortCarInventory(inventory));
/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(arr) {
  /* code here */
  var years = [];
  for(let i = 0; i < arr.length; i++){
    years.push(arr[i].car_year);
  }
  return years;
}
console.log(getModelYears(inventory));

/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(arr, num) {
  /* code here */
  var list = [];
  for(let i = 0; i<arr.length; i++){
    if(num >= arr[i].car_year){
      list.push(arr[i]);
    }
  }
  return list;
}
console.log(getOlderCars(inventory,2001));

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(arr) {
  /* code here */
  const germanCars = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].car_make === "Mercedes-Benz"||
    arr[i].car_make === "Audi"||
    arr[i].car_make === "BMW"||
    arr[i].car_make === "Volkswagen"){
      germanCars.push(arr[i]);
    }
  }
  return germanCars;
}
 console.log(getGermanCars(inventory));

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
*    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
*/
const sum = (a, b) => a + b ; // code here!
const addFive = num => num + 5; // code here!
const argTimesTwo = num => num * 2; // code here!
console.log (sum(1,9));
console.log(addFive(4));
console.log(argTimesTwo(2));
/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(num) {
  /* code here */
    let marker = {
      odometer: num,
      drive(dist){
        return this.odometer += dist;
      }
    }
    return marker;
}
console.log(carMaker(90).drive(10));


/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (addNumbers) { module.exports.addNumbers = addNumbers }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
