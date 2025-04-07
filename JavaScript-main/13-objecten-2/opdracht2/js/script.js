const audi = {
    naam: "Audi A5 2.0",
    bouwjaar: 2009,
    kmStand: 165000,
    energielabel: "A",
    brandstof: "benzine",
    prijs: 12750.00,
    garantie: false,
    opties: ["Cruise Control", "Boordcomputer", "Navigatiesysteem", "Airconditioning", "ABS"],
    motor: {
        vebruik: "15,62 km/l",
        motorinhoud: "1.984 cc",
        topsnelheid: "250 km/h",
        vermogen: "211 pk"
    },
    kopen: function() {
        console.log("Voor slechts €" + this.prijs + " kan deze mooie " + this.naam + " uit " + this.bouwjaar + " al van u zijn.");
    },
    accelereren: function() {
        console.log("Deze " + this.naam + " is binnen een paar seconden op de topsnelheid van " + this.motor.topsnelheid + ".");
    },
    tanken: function() {
        console.log("Deze " + this.naam + " verbruikt gemiddeld " + this.motor.vebruik + " waardoor u niet heel vaak benzine hoeft te tanken.");
    }
};

console.log(audi);
audi.kopen();
audi.accelereren();
audi.tanken();

document.querySelector("body").innerHTML =
"<table><tr><td>Naam</td><td>"  + audi.naam + "</td></tr>" +
"<tr><td>Bouwjaar</td><td>"  + audi.bouwjaar + "</td></tr>" +
"<tr><td>Km stand</td><td>"  + audi.kmStand + "</td></tr>" +
"<tr><td>Energielabel</td><td>"  + audi.energielabel + "</td></tr>" +
"<tr><td>Brandstof</td><td>"  + audi.brandstof + "</td></tr>" +
"<tr><td>Prijs</td><td>"  + audi.prijs + "</td></tr>" +
"<tr><td>Garantie</td><td>"  + audi.garantie + "</td></tr>" +
"<tr><td>Opties</td><td>"  + audi.opties + "</td></tr></table>";

for(let element in audi.motor) {
    console.log(audi.motor[element]);
    document.querySelector("table").innerHTML +=
    "<tr><td>" + `${element}:` + "</td><td>" + `${audi.motor[element]}` + "</tr></td>";
    document.querySelector("table").style.textTransform = "Capitalize";
    document.querySelector("table").style.border = "1px solid yellow";
}