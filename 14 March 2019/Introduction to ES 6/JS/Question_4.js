const user={
    firstName: "Sahil",
    lastName:"Dua",
    Address:{
        Line1:"address line 1",
        Line2:"address line 2",
        State:"Delhi",
        Pin: 110085,
        country:"India",
        City:"New Delhi",
    },
    phoneNo:9999999999
};

let {firstName,Address} = user;
var {Line1,Line2,State,Pin,country,City}=Address;
var addr="Line 1: "+Line1+"<br>Line 2: "+Line2+"<br>State: "+State+"<br>Pin: "+Pin+"<br>Country: "+country+"<br>City: "+City;
document.getElementsByTagName('address')[0].innerHTML=addr;
