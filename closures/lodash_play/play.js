var _ = require("lodash")

var numbers = [23, 45, 97, 4]
var users = [
  { 'user': 'james',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'frank', 'age': 62 },
  { 'user': 'reece', 'age': 31 },
  { 'user': 'glen',   'age': 24 },
  { 'user': 'jarrod', 'age': 8 }
]

var newNumbers1 = _.shuffle( numbers )
var newNumbers2 = _.difference( numbers, [ 23, 45, 98, 5] )
var newNumbers3 = _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
var searchByAge = _.orderBy(users, ['age', 'user'], ['asc', 'asc'])
var searchByType = _.orderBy(users, ['user', 'age'], ['desc', 'asc'])


console.log(newNumbers1)
console.log("\n")
console.log(newNumbers2)
console.log("\n")
console.log(newNumbers3)
console.log("\n")
console.log(searchByAge)
console.log("\n")
console.log(searchByType)
