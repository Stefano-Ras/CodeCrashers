"use strict";

const inkoopprijs = 3.00;
const winstmarge = 2.50;
const btw = 1.21;
let hoeveelheid = 5;

const totaalbedrag = ((inkoopprijs + winstmarge) * btw) * hoeveelheid;

alert('\u20AC' + totaalbedrag);