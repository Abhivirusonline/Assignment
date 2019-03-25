let flatten = (arr) =>
{
    var array = [];
    while(arr.length) {
        var value = arr.shift();
        if(Array.isArray(value)) {
            // this line preserve the order
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}
var arr=[1,[2,[3]],[4]];
document.getElementById('flatter').innerHTML="Orginal Array :[1,[2,[3]],[4]] <br/>OUTPUT : ["+flatten(arr)+"]";
