var Person = function(name) {
  // this.name = name
  this.getName = function() {
    return name
  }

  this.setNewName = function(newName) {
    name = newName
  }
}

var person = new Person("Darren")
console.log(person.getName())

// shows how scope effects in the way closure works
