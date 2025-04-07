function Games(name, releaseDate, platform, developer) {
    Object.defineProperties(this, {
        name: {
            get: function() {
                return "<strong>" + name + "</strong>";
            },
            set: function(newName) {
                if(typeof newName === "string") {
                    this.name = newName;
                } else {
                    throw new TypeError("Naam is geen string!");
                }
            },
            configurable: false,
        },
        releaseDate: {
            get: function() {
                return "<strong>" + releaseDate + "</strong>";
            },
            set: function(newDate) {
                const dateRegex = /(19[0-9]{2})|(20[0-9]{2})/;
                if(dateRegex.test(newDate)) {
                    this.releaseDate = newDate;
                } else {
                    throw new TypeError("Datum is niet geldig!");
                }
            },
            configurable: false,
        },
        platform: {
            get: function() {
                return "<em>" + platform + "</em>";
            },
            set: function(newPlatform) {
                if(typeof newPlatform === "string") {
                    this.platform = newPlatform;
                } else {
                    throw new TypeError("Platform is geen string!");
                }
            },
            configurable: false,
        },
        developer: {
            get: function() {
                return "<em>" + developer + "</em>";
            },
            set: function(newDeveloper) {
                if(typeof newDeveloper === "string") {
                    this.developer = newDeveloper;
                } else {
                    throw new TypeError("Developer is geen string!");
                }
            },
            configurable: false
        }
    });
}

/* function Games(name, releaseDate, platform, developer) {
    Object.defineProperty(this, "name", {
        get: function() {
            return "<strong>" + name + "</strong>";
        },
        set: function(newName) {
            if(typeof newName === "string") {
                this.name = newName;
            } else {
                throw new TypeError("Naam is geen string!");
            }
        },
        configurable: false
    });
    Object.defineProperty(this, "releaseDate", {
        get: function() {
            return "<strong>" + releaseDate + "</strong>";
        },
        set: function(newDate) {
            const dateRegex = /(19[0-9]{2})|(20[0-9]{2})/;
            if(dateRegex.test(newDate)) {
                this.releaseDate = newDate;
            } else {
                throw new TypeError("Datum is niet geldig!");
            }
        },
        configurable: false
    });
   Object.defineProperty(this, "platform", {
        get: function() {
            return "<em>" + platform + "</em>";
        },
        set: function(newPlatform) {
            if(typeof newPlatform === "string") {
                this.platform = newPlatform;
            } else {
                throw new TypeError("Platform is geen string!");
            }
        },
        configurable: false
    });
    Object.defineProperty(this, "developer", {
        get: function() {
            return "<em>" + developer + "</em>";
        },
        set: function(newDeveloper) {
            if(typeof newDeveloper === "string") {
                this.developer = newDeveloper;
            } else {
                throw new TypeError("Developer is geen string!");
            }
        },
        configurable: false
    });
} */

let Elden = new Games("Elden Ring", 2022, "PC", "FromSoft");
let Monster = new Games("Monster Hunter: Wilds", 2025, "PC", "Capcom");

console.log(Elden);
console.log(Monster);

console.log(Object.values(Games));