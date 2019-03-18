var person = {
  name: "Jitender Singh",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
      document.getElementById('call').innerHTML+="<br/>"+(this.name + " says hello " + thing) ;
  }
}

person.hello("world");
person.hello.call({ name: "Abhishek Yadav" }, "world");


var person = {
    name: "Jitender Singh",
hello: function(argument) {
console.log(this.name + " says hello " + argument);
document.getElementById('bind-1').innerHTML+="<br/>"+(this.name + " says hello " + argument) ;
}
}
person.hello("world");
var helloFunc = person.hello.bind({ name: "Abhishek Yadav" });
helloFunc("world");