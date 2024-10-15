const producten = [
    {
        naam: "Melk",
        prijs: 0.89,
        beschikbaar: 1
    },
    {
        naam: "Eiren",
        prijs: 1.29,
        beschikbaar: 0
    },
    {
        naam: "Kaas",
        prijs: 1.69,
        beschikbaar: 1
    },
    {
        naam: "Suiker",
        prijs: 1.00,
        beschikbaar: 0
    }
];

producten[0].prijs = 1.29;
producten[1].prijs = 1.49;
producten[2].prijs = 2.79;
producten[3].prijs = 29.99;
console.log(producten);

table = document.querySelector("table");

producten.forEach((producten) => {
    table.innerHTML += '<tr><td>' + producten.naam + '</td><td>'
    + producten.prijs + '</td><td>' + producten.beschikbaar + '</td></tr>';
});