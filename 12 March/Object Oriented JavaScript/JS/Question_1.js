function Person(name,age){
    this.name=name;
    this.age=age;
}

function Employee(salary){
    this.salary=salary;
}
function Developers(comp){
    this.comp=comp;
}
Employee.prototype=new Person("Abhi",22);
Developers.prototype=new Employee("5000")
var dev=new Developers("FEEN");
console.log(dev.name);	 //show only name
console.log(dev);
