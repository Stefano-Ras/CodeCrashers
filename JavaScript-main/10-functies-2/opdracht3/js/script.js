const persons = [
	{name: "Tom", age: 33, loc: "Weert"},
	{name: "Ben", age: 23, loc: "Alkmaar"},
	{name: "Jan", age: 31, loc: "Haarlem"},
	{name: "Pim", age: 77, loc: "Bergen"},
	{name: "Tim", age: 54, loc: "Oudorp"},
];

const format = persons => {
    persons.name = persons.name.substring(0,1) + ".";
    persons.age = persons.age + 1;
    persons.loc = persons.loc.toUpperCase();
    console.log(persons);
};

persons.map(format, persons[0]);

/* const names = ["Jeremiah", "Brienne", "Gaspar", "Yoeri"];

// Namen inkorten en opslaan in nieuwe array.
const results = names.map(name => name.substring(0,3));
console.log(results); */

/* const persons1 = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  document.getElementById("demo").innerHTML = persons1.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
} */