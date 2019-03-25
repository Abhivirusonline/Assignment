class Shape {
    constructor(argument1){
    this.argument1=argument1;
    }
}
class Rectangle extends Shape{
    constructor(length,width){
     super(length);
     this.width=width;
    }
    area=()=>this.argument1*this.width;
}
class coloredRect extends Rectangle{
    constructor(length,width,color){
        super(length,width);
        this.color=color;
    }
    colReact=()=>{
       return this.color;
    }
}
let cr=new coloredRect(15,20,"red");
console.log("Rectangle color : "+cr.colReact());
console.log("Rectangle area :"+cr.area());
console.log("Value inside Shape class : "+cr.argument1);



