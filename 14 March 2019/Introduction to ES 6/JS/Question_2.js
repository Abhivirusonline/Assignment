var x=document.getElementById('model');
var y=document.getElementById('content');
function showModel(id){
    x.style.display="block";
    var nodeObject = document.querySelectorAll("#ID \li");
    var len=nodeObject.length;
    var arr=[];
    for (var i = 0; i < len; i++) {
        arr[i] = nodeObject[i].innerText;
    }

    let arr1 = arr.filter(val => {
        if(val.includes('Flexbox')) return val
    })
    var lis = Array.prototype.slice.call(nodeObject);
    let arr2 = lis.map(listItem => {
        return listItem.dataset.time;
    })
    let arr3 = arr2.map(time => {
        return time.split(':')[0]*60+parseInt(time.split(':')[1]);
    })
    let sum = arr3.reduce((a,b) => {
        return a+b;
    });
console.log(id);

     if(id==0) {
         y.innerHTML="<b>Length of array is :</b>"+len+"<br>";
         y.innerHTML+="<b>Content in Array :</b><br>["+arr.toString()+"]";
     }
     else if(id==1) {
         y.innerHTML="<b>Length of array is :</b>"+arr1.length+"<br>";
         y.innerHTML += "<b>Content in Array :</b> [" + arr1+ "]";
     }
     else if(id==2)
     {
         y.innerHTML="<b>Length of array is :</b>"+len+"<br>";
         y.innerHTML+="<b>Content in Array :</b><br>["+arr2+"]";
     }
     else if(id==3)
     {
         y.innerHTML="<b>Length of array is :</b>"+len+"<br>";
         y.innerHTML+="<b>Content in Array :</b><br>["+arr3+"]";
     }
     else if(id==4)
     {
         y.innerHTML+="<b>Total Time is :</b>"+sum+" Seconds";
     }
}
function hideModel(){
    y.innerHTML="";
    x.style.display="none";
}