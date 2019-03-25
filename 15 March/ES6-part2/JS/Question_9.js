var map = new Map();
map.set("First Name", "Joyesh");
map.set("Last Name", "Malik");
map.set("Competency", "FEEN");
for(var item of map.entries())
{
    document.getElementById("output").innerHTML+="<li>"+item+"</li>";
}