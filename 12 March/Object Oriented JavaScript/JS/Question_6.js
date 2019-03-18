var startFunction = (function(){
    var counter=0;
    return function () {
        document.getElementById('count').innerHTML=counter;
        return counter++;
    }
}());
setInterval(startFunction,1000);