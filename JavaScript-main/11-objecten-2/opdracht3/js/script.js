const audi = {
    _naam: "Audi A5 2.0",
    _bouwjaar: 2009,
    _kmStand: 165000,
    _energielabel: "A",
    _brandstof: "benzine",
    _prijs: 12750.00,
    _garantie: false,
    _opties: ["Cruise Control", "Boordcomputer", "Navigatiesysteem", "Airconditioning", "ABS"],
    motor: {
        vebruik: "15,62 km/l",
        motorinhoud: "1.984 cc",
        topsnelheid: "250 km/h",
        vermogen: "211 pk"
    },
    kopen: function() {
        console.log("Voor slechts €" + this._prijs + " kan deze mooie " + this._naam + " uit " + this._bouwjaar + " al van u zijn.");
    },
    accelereren: function() {
        console.log("Deze " + this._naam + " is binnen een paar seconden op de topsnelheid van " + this.motor.topsnelheid + ".");
    },
    tanken: function() {
        console.log("Deze " + this._naam + " verbruikt gemiddeld " + this.motor.vebruik + " waardoor u niet heel vaak benzine hoeft te tanken.");
    },
    get naam() {
        return this._naam;
    },
    get bouwjaar() {
        return this._bouwjaar;
    },
    get kmStand() {
        return this._kmStand;
    },
    get energielabel() {
        return this._energielabel;
    },
    get brandstof() {
        return this._brandstof;
    },
    get prijs() {
        return "€" + (Math.round(this._prijs * 100) / 100).toFixed(2);
    },
    get garantie() {
        return this._garantie ? "Ja" : "Nee";
    },
    get opties() {
        return this._opties.join(", ");
    },
    get verbruik() {
        return this.motor.vebruik;
    },
    get motorinhoud() {
        return this.motor.motorinhoud;
    },
    get topsnelheid() {
        return this.motor.topsnelheid;
    },
    get vermogen() {
        return this.motor.vermogen;
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