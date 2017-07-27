var _ = require("lodash")

var numbers = [23, 45, 97, 4]

var newNumbers = _.map( numbers, function(number, index){
  return number * 2
})

console.log(newNumbers)
