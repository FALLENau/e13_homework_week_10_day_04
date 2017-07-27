// //this inside function refers to golbal/window
// function add(a,b) {
//   console.log(this)
//   this.myNumber = 20
//   return a + b
// }
//
// add(5, 3)
//
//console.log(global.myNumber)


// //this inside obj refers to obj
// var car = {
//   speed: 0,
//
//   accelerate: function() {
//     this.speed += 10
//   }
// }
//
// car.accelerate()

// //inside constructor functions "this" refers to the newly create obj
// function Animal(type, legs) {
//   this.type = type
//   this.legs = legs
//   this.logInfo = function() {
//     console.log("The " + this.type + " has " + this.legs + " legs")
//   }/*.bind(this)*/
// }
//
// var cat = new Animal('Cat', 4)
// cat.logInfo()
// //when calling a function inside a method the function losses it's "this" and
// //refers to the global "this" hench setTimeout will return undifinded
// setTimeout(cat.logInfo, 2000)
// //the solution for this is to .bind(obj) obj = cat in this instance
// // setTimeout(cat.logInfo.bind(cat), 2000)
// // or add .bind(this) onto the function(but not prototype)


// console.log("Hi")
//
// setTimeout(function cb() {
//   console.log("There")
// }, 5000)
//
//
// setTimeout(function cb() {
//   console.log("wait for me")
// }, 5000)
//
// console.log("now")

// [1,2,3,4].forEach(function(i) {
//   console.log(i)
//   delay()
// })
//
// function asyncForEach(array, cb) {
//   array.forEach(function() {
//     setTimeout(cb, 0)
//   })
// }
//
// asyncForEach([1,2,3,4], function(i) {
//   console.log("Processnig async", i)
//   delay()
// })// what is delay?
