function Character(name, profession, gender, age, strength, HP) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;
    this.healthStatus = "";
    this.printStats = function() {
        for (var property1 in this) {
            if(typeof this[property1] != "function"){
                console.log(property1 + ": " + this[property1])
            }
        }
        return ("");
    };
    this.isAlive = function() {
        if(this.strength !=0) {
            this.healthStatus = "ALIVE";
            // console.log("HEALTH STATUS: " + this.healthStatus);
        } else {
            this.healthStatus = "DECEASED";
            // console.log("HEALTH STATUS: " + this.healthStatus);
        };
        // console.log(this.healthStatus)
        return this.healthStatus;
    };
    this.Attack = function (opponent) {
        if(opponent.HP > this.HP) {
            this.strength = (this.strength - opponent.HP);
            console.log("OUCH! " + opponent.name + " hit you, and left you with: " + this.strength + " health points");
            return this.strength;
        } else {
            opponent.strength = opponent.strength - this.HP;
            console.log("SUCCESS! Your opponent's new strength is: " + opponent.strength);
            return opponent.strength;
        }
    }
};

var flora = new Character("Flora", "Warrior", "Female", 30, 1000, 35);
var fauna = new Character("Fauna", "Baker", "Male", 50, 1000, 15);
var animalia = new Character("Animalia", "Goddess of Animals", "Female", 258, 1000, 85);

console.group();
console.log("---------Characters---------")
console.log(flora.isAlive());
console.log(flora.printStats());
console.log("----------------------------")
console.log(fauna.printStats());
console.log("----------------------------")
// console.log(animalia.printStats());
console.groupEnd();
console.log("----------------------------")
flora.Attack(fauna);
console.log("Attack Success")
console.log("----------------------------")