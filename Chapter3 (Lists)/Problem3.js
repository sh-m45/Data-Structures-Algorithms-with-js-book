function person(name, gender) {
    this.name = name,
    this.gender = gender
  }
  function printSamilarPerson() {
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list.length; j++) {
        if (JSON.stringify(Object.values(list[i])[1]) === JSON.stringify(Object.values(list[j])[1]) && i != j) {
          console.log(list[i],);
          j = list.length - 1;
        }
      }
    }
  }
  var list = [new person("shrouk", "female"), new person("mamdoh", "male"), new person("omar", "male"), new person("nada", "female"), new person("ahmed", "male"), new person("mahmoud", "male"), new person("abdallah", "male"), new person("aymen", "male"), new person("salem", "male")]
  printSamilarPerson();