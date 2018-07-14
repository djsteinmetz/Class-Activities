var inquirer = require('inquirer');
var count = 1;
var countSub = 1;
var starters = [];
var subs = [];
var teamScore = 0;

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function() {
        var flip = Math.floor(Math.random() * 2);
        console.log(flip)
        if(flip == 1) {
            console.log("Yay! Offense increase!")
            this.offense++;
        } else {
            console.log("Yay! Defense increase!")
            this.defense++;
        };
        return;
    };
    this.badGame = function() {
        var flip = Math.floor(Math.random() * 2);
        console.log(flip)
        if(flip == 1) {
            console.log("Oops! Defense decrease!")
            this.offense--;
        } else {
            console.log("Oops! Defense decrease!")
            this.defense--;
        }; 
        return;
    }
    this.print = function() {
        for (var property1 in this) {
            if(typeof this[property1] != "function"){
                console.log(property1 + ": " + this[property1]);
            }
        }
        console.log("-------------------------");
    };
};
var addStarters = function() {
    if(count<2) {
        console.log("------------Player " + count + "------------")
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                type: "list",
                message: "What is your position?",
                choices: ["Forward", "Back", "Striker", "Goalkeeper"]
            }, {
                name: "offense",
                message: "What are your offense points?"
            }, {
                name: "defense",
                message: "What are your defense points?"
            }
        ]).then(answers => {
            count++
            var newStarter = new Player(answers.name, answers.position, answers.offense, answers.defense);
            starters.push(newStarter);
            console.log("-------------------------");
            addStarters();
        });
    } else {
        console.log("------------All starters added!------------");
        console.log("-------------------------");
        for(var i=0; i<starters.length; i ++) {
            starters[i].print();
        }
        console.log("-------------------------");
        console.log("------------Add Substitue Players!------------");
        console.log("-------------------------");
        addSubs();
    };  
};
var addSubs = function() {
    if(countSub<2) {
        console.log("------------Substitute " + countSub + "------------")
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                type: "list",
                message: "What is your position?",
                choices: ["Forward", "Back", "Striker", "Goalkeeper"]
            }, {
                name: "offense",
                message: "What are your offense points?"
            }, {
                name: "defense",
                message: "What are your defense points?"
            }
        ]).then(answers => {
            countSub++
            var newSub = new Player(answers.name, answers.position, answers.offense, answers.defense);
            subs.push(newSub);
            console.log("-------------------------");
            addSubs();
        });
    } else {
        console.log("-------------------------");
        console.log("All substitutes added!");
        console.log("-------------------------");
        for(var i=0; i<subs.length; i ++) {
            subs[i].print();
        };
        playGame(0);
    };  
};

function playGame(roundNum) {
    if(roundNum < 5) {
        console.log("ROUND NUMBER: " + roundNum);
        var offensiveCount = 0;
        var defensiveCount = 0;
        console.log("PLAY GAME RAN")
        console.log(starters.length);
        console.log(subs.length);
        var firstNum = Math.floor(Math.random() * 20);
        var secondNum = Math.floor(Math.random() * 20);
        console.log("FIRST NUM: " + firstNum);
        console.log("SECOND NUM: " + secondNum);
        for(var i=0; i<starters.length; i++) {
            offensiveCount = offensiveCount + parseInt(starters[i].offense);
            console.log("OFFENSIVE COUNT: " + offensiveCount);
        }
        for(var i=0; i<starters.length; i++) {
            defensiveCount = defensiveCount + parseInt(starters[i].defense);
            console.log("DEFENSIVE COUNT: " + defensiveCount);
        };
        if(firstNum < offensiveCount) {
            teamScore++;
        };
        if(secondNum > defensiveCount) {
            teamScore--;
        };
        console.log("TEAM SCORE: " + teamScore)
        console.log("playGame finished round");
        roundNum++;
        playGame(roundNum);
    } else {
        if(teamScore>0) {
            for(var i=0; i<starters.length; i++) {
                starters[i].goodGame();
                console.log("You won!");
                for(var i=0; i<starters.length; i ++) {
                    starters[i].print();
                };
            };
        } else if(teamScore<0) {
            for(var i=0; i<starters.length; i++) {
                starters[i].badGame();
                console.log("You lost!");
                for(var i=0; i<starters.length; i ++) {
                    starters[i].print();
                };
            };
        };
        console.log("TEAM SCORE: " + teamScore);
        inquirer.prompt([
            {
                name: "name",
                type: "confirm",
                message: "Would you like to play again?",
            }
        ]).then(answers => {
            console.log(answers.name);
            if(answers.name) {
                playGame(0);
            } else {
                console.log("Thanks for playing!");
            }
        });
    };
};

addStarters();
// var dj = new Player("DJ", "Starter", 22, 25);
// dj.goodGame();
// dj.badGame();
// dj.print();

