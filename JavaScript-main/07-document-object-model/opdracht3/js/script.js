const ol = document.createElement("ol");
document.body.appendChild(ol);

const cities = ["Alkmaar", "Amsterdam", "Rotterdam", "Utrecht", "Heerhugowaard", "Haarlem"];
cities.sort();
const list = document.querySelectorAll("ol");
for(let i = 0; i < cities.length; i++) {
    list[i].innerHTML = cities;
}