const date = new Date();
let dagVanWeek = date.getDay();
let dagVanMaand = date.getDate();
let maand = date.getMonth();

if (dagVanWeek == 5 && dagVanMaand == 13) {
    alert("Het is vrijdag de 13e!");
} else {
    alert("Het is geen vrijdag de 13e...");
}

if (dagVanMaand == 0 || dagVanWeek == 6) {
    alert("Het is weekend!");
} else {
    alert("Het is geen weekend.");
}

if (dagVanMaand == 20 && maand == 2) {
    alert("Vandaag is mijn verjaardag!");
} else {
alert("Ik ben nog lang niet jarig...");
}

if (dagVanWeek != 2 || dagVanWeek != 4 || dagVanWeek !=5) {
    alert("Ik ben vandaag vrij!");
} else {
    alert("Ik moet vandaag werken.");
}