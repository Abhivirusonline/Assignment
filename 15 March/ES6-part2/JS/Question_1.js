var arr = [1,2,3,4,5,6,5,7,4];
document.getElementsByClassName('array')[0].innerHTML+=arr;
var set1 = new Set(arr);
for (var item of set1.values())
    document.getElementsByTagName("ul")[0].innerHTML+="<li>"+item+"</li>";