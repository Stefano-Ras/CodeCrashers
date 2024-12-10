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
    set naam(naam) {
		if (typeof naam === "string") {
            this._naam = naam;
		} else {
			throw new TypeError("Waarde is geen string!");
		}
    },
    get bouwjaar() {
        return this._bouwjaar;
    },
    set bouwjaar(bouwjaar) {
		if (bouwjaar > 2006 && bouwjaar < 2017) {
            this._bouwjaar = bouwjaar;
        } else {
            throw new TypeError("Bouwjaar moet tussen 2007 en 2016 zijn.");
        }
    },
    get kmStand() {
        return this._kmStand;
    },
    set kmStand(kmStand) {
		if (typeof kmStand === "int") {
            this._kmStand = kmStand;
        } else {
            throw new TypeError("Kilometerstand moet een geheel getal zijn.");
        }
    },
    get energielabel() {
        return this._energielabel;
    },
    set energielabel(energielabel) {
        const energieRegex = /[ABCDEFG]/;
		if (energieRegex.test(energielabel)) {
            this._energielabel = energielabel;
        } else {
            throw new TypeError("Energielabel moet tussen A en G zijn.");
        }
    },
    get brandstof() {
        return this._brandstof;
    },
    set brandstof(brandstof) {
        const brandstofRegex = /Benzine|Diesel/;
		if (brandstofRegex.test(brandstof)) {
            this._brandstof = brandstof;
        } else {
            throw new TypeError("Brandstof moet 'Benzine' of 'Diesel' zijn.");
        }
    },
    get prijs() {
        return "€" + (Math.round(this._prijs * 100) / 100).toFixed(2);
    },
    set prijs(prijs) {
        const prijsRegex = /^(?:0(?:\.[0-9]{1,2})?|1(?:\.00?)?)$/;
		if (prijsRegex.test(prijs)) {
            this._prijs = prijs;
        } else {
            throw new TypeError("Prijs moet twee decimalen hebben.");
        }
    },
    get garantie() {
        return this._garantie ? "Ja" : "Nee";
    },
    set garantie(garantie) {
		if (garantie == "true" || "false") {
            this._garantie = garantie;
        } else {
            throw new TypeError("Garantie moet 'true' of 'false' zijn.");
        }
    },
    get opties() {
        return this._opties.join(", ");
    },
    set opties(opties) {
        this._opties = opties;
    },
    get verbruik() {
        return this.motor.vebruik;
    },
    set verbruik(verbruik) {
        this.motor.vebruik = verbruik;
    },
    get motorinhoud() {
        return this.motor.motorinhoud;
    },
    set motorinhoud(motorinhoud) {
        this.motor.motorinhoud = motorinhoud;
    },
    get topsnelheid() {
        return this.motor.topsnelheid;
    },
    set topsnelheid(topsnelheid) {
        this.motor.topsnelheid = topsnelheid;
    },
    get vermogen() {
        return this.motor.vermogen;
    },
    set vermogen(vermogen) {
        this.motor.vermogen = vermogen;
    },

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