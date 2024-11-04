const dog = 
{
    name: "Puggers",
    age: 2,
    race: "pug",
    fur: "brown",
    family: 
    {
        mother:
        {
            name: "Ms Puggers"
        },
        father:
        {
            name: "Mr Puggers"
        }
    },
    sleep: function() {
        window.alert("Zzz");
    },
    eat: function() {
        window.alert("");
    },
    bark: function() {
        window.alert("Woof!");
    },
    givePaw: function() {
        window.alert("");
    }
};

dog.age++;
dog.houseTrained = false;

let text = `Hello my name is ${dog.name} and I am a very cute ${dog.age} year old ${dog.race}. My fur is ${dog.fur}. My mom and dad are ${dog.family.mother.name} and ${dog.family.father.name}!`
let trained = `I am also house trained!`
let untrained =`I still turn the hallway into a nuclear wasteland.`
if(dog.houseTrained == true) {
    document.querySelector("p").innerHTML = text + ` ` + trained;
} else {
    document.querySelector("p").innerHTML = text + ` ` + untrained;
}

dog.sleep();
dog.bark();