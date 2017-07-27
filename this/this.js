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

//inside constructor functions "this" refers to the newly create obj
function Animal(type, legs) {
  this.type = type
  this.legs = legs
  this.logInfo = function() {
    console.log("The " + this.type + " has " + this.legs + " legs")
  }
}

var cat = new Animal('Cat', 4)
cat.logInfo()
//when calling a function inside a method the function losses it's "this" and
//refers to the global "this"
setTimeout(cat.logInfo.bind(cat), 4000)
