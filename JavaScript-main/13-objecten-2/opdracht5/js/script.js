function Movie(name, releaseDate, genre, directors, writers, actors) {
    if(typeof name === "string") {
        this.name = name;
    }
    if(Number.isInteger(releaseDate)) {
        this.releaseDate = releaseDate;
    }
    if(typeof genre === "string") {
        this.genre = genre;
    }
    this.directors = directors;
    this.writers = writers;
    this.actors = actors;
}

let Vampire = new Movie("Vampire's Kiss", 1988, "Dark Comedy", ["Robert Bierman"],
    ["Joseph Minion"], ["Nicolas Cage", "Jeniffer Beals", "Kasi Lemmons"]
);
let Singham = new Movie("Singham", 2011, "Cop Drama", ["Rohit Shetty"],
    ["Hari", "Yunus Sajawal", "Sajid"], ["Ajay Devgn", "Prakash Raj", "Sonali Kulkarni"]
);
let Bulk = new Movie("The Amazing Bulk", 2012, "Parody", ["Lewis Schoenbrun"],
    ["Keith Schaffner", "Jerimiah Campbell"], ["Terence Lording", "Randal Malone", "Jed Rowen"]
);

const movies = [Vampire, Singham, Bulk];

console.log(movies);