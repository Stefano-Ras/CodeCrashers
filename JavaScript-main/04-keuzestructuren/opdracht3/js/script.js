const date = new Date();
let dagVanWeek = date.getDay();
let dagVanMaand = date.getDate();
let maand = date.getMonth();

if (dagVanWeek == 5 && dagVanMaand == 13) {
    window.alert("Het is vrijdag de 13e!");
} else {
    window.alert("Het is geen vrijdag de 13e...");
}

if (dagVanMaand == 6 || dagVanWeek == 7) {
    window.alert("Het is weekend!");
} else {
    window.alert("Het is geen weekend.");
}

if (dagVanMaand == 20 && maand == 2) {
    window.alert("Vandaag is mijn verjaardag!");
} else {
window.alert("Ik ben nog lang niet jarig...");
}

if (dagVanWeek != 2 || dagVanWeek != 4 || dagVanWeek !=5) {
    window.alert("Ik ben vandaag vrij!");
} else {
    window.alert("Ik moet vandaag werken.");
}