var x = document.getElementById('result');
var s = [1,2,3,4,5];
var i = 0;

(function loop() {
    x.innerText += " "+s[i];
    if (++i < s.length) {
        setTimeout(loop, 3000);
    }
})();