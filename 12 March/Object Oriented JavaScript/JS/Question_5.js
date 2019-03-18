let invocation=0;
let instaciated=0;

function myFunction() {
    invocation++;
}
function check(c) {
    var val;
    if(c==1)
        val=new myFunction();
    else
        val=myFunction();
    if(val){
        instaciated++;
    }
    var x = document.getElementsByClassName("invoke");
        x[0].getElementsByTagName('label')[0].innerHTML=invocation;
    var y=document.getElementsByClassName('instanciate');
        y[0].getElementsByTagName('label')[0].innerHTML=instaciated;
}
