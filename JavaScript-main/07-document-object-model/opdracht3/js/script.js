const ol = document.createElement("ol");
document.body.appendChild(ol);

const cities = ["Alkmaar", "Amsterdam", "Rotterdam", "Utrecht", "Heerhugowaard", "Haarlem"];
cities.sort();

for(let i = 0; i < cities.length; i++) {
    document.querySelector("ol").innerHTML = cities[i];
}