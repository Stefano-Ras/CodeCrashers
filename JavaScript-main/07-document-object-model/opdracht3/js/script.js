const ol = document.createElement("ol");
document.body.appendChild(ol);

const cities = ["Alkmaar", "Amsterdam", "Rotterdam", "Utrecht", "Heerhugowaard", "Haarlem"];
cities.sort();
/* const list = document.querySelectorAll("ol");
for(let i = 0; i < cities.length; i++) {
    list[i].innerHTML = cities;
} */
cities.forEach(citiesList);
let list = "";
document.querySelector("body").innerHTML = list;
function citiesList(index) {
    list += index;
}
/* 
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
} */