const names = "Branford, Terra\nCole, Locke\nGaramonde, Cyan\nChére, Celes";
const namesNew = names.replace(/([A-zÀ-ú]+),\s([A-zÀ-ú]+)/g, "$2"+ " " + "$1");

console.log(namesNew);

//Branford, Terra\nCole, Locke\nGaramonde, Cyan\nChère, Celes

//var r = a.replace(/(f)/, function(v) { return v.toUpperCase(); });