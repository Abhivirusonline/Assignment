const PI = 3.14;

let circle = () =>
{
    let radius = 3;
    return PI * radius * radius;
}

let rectangle = () =>
{
    let length = 5;
    let breadth = 6;
    return length * breadth;
}

let cylinder = () =>
{
    let radius = 5;
    let height = 7;
    return 2 * PI * radius * (height + radius);
}

document.getElementById("circle").innerHTML = "Area of circle = " + parseFloat(circle()).toFixed(2) +" Unit Square";
document.getElementById("rectangle").innerHTML = "Area of rectangle = " + parseFloat(rectangle()).toFixed(2)+" Unit Square";
document.getElementById("cylinder").innerHTML = "Area of cylinder = " + parseFloat(cylinder()).toFixed(2) +" Unit Square";