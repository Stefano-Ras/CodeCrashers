const dkc = "Donkey Kong Country";
const anthem = "God Save the Queen";
const lyrics1 = "I'm blue,";
const lyrics2 = "Da ba dee da ba di";
const yoda = "you must have patience my young Padawan";

document.getElementById("Kong").innerHTML = dkc.padEnd(30, '.');
document.getElementById("King").innerHTML = anthem.replace('Queen', 'King');
document.getElementById("Blue").innerHTML = lyrics1 + " " + lyrics2.padEnd(19, " ").repeat(7);
document.getElementById("Jedi").innerHTML = yoda.replaceAll(/you must have patience/g, "patience you must have");