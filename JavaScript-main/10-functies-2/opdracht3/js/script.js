const persons = [
	{name: "Tom", age: 33, loc: "Weert"},
	{name: "Ben", age: 23, loc: "Alkmaar"},
	{name: "Jan", age: 31, loc: "Haarlem"},
	{name: "Pim", age: 77, loc: "Bergen"},
	{name: "Tim", age: 54, loc: "Oudorp"},
];

const formatPersons = persons => {
    persons.name = persons.name.substring(0,1) + ".";
    persons.age = persons.age + 1;
    persons.loc = persons.loc.toUpperCase();
    console.log(persons);
};

const formattedpersons = new Array(persons.map(formatPersons));

console.log(formattedpersons);

for(let i = 0; i < formattedpersons.length; i++) {
    document.querySelector("body").innerHTML = "<section><h1>" + formattedpersons.name +
    "</h1><p>" + formattedpersons.age + "</p><p>" + formattedpersons.loc + "</p></section>";
}

/* formattedpersons.forEach(person => {
    document.querySelector("body").innerHTML = "<section><h1>" + person.name +
    "</h1><p>" + person.age + "</p><p>" + person.loc + "</p></section>";
}); */