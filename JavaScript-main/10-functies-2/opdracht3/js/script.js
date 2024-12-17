const persons = [
	{name: "Tom", age: 33, loc: "Weert"},
	{name: "Ben", age: 23, loc: "Alkmaar"},
	{name: "Jan", age: 31, loc: "Haarlem"},
	{name: "Pim", age: 77, loc: "Bergen"},
	{name: "Tim", age: 54, loc: "Oudorp"}
];

const formatPersons = persons => {
    persons.name = persons.name.substring(0,1) + ".";
    persons.age = persons.age + 1;
    persons.loc = persons.loc.toUpperCase();
    return persons;
};

const formattedpersons = persons.map(formatPersons);

console.log(formattedpersons);

for(let i = 0; i < formattedpersons.length; i++) {
    document.querySelector("body").innerHTML += "<section><h1>" + formattedpersons[i].name +
    "</h1><p>" + formattedpersons[i].age + "</p><p>" + formattedpersons[i].loc + "</p></section>";
}