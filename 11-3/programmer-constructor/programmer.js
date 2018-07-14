var inquirer = require('inquirer');
var count = 0;
var programmers = [];

function Programmer(name, jobTitle, age, favLang) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.age = age;
    this.favLang = favLang;
    this.print = function() {
        for (var property1 in this) {
            if(typeof this[property1] != "function"){
                console.log(property1 + ": " + this[property1]);
            }
        }
        console.log("-------------------------");
        return ("");
    };
};
var addProgrammer = function() {
    if(count<2) {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "age",
                message: "How old are you?"
            }, {
                name: "language",
                message: "What is your favorite programming language?"
            }
        ]).then(answers => {
            var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
            newProgrammer.isStudent = true;
            Programmer.prototype.isCoding = true;
            programmers.push(newProgrammer);
            count++
            console.log("-------------------------");
            addProgrammer();
        });
    } else {
        console.log("-------------------------");
        console.log("All users added!");
        console.log("-------------------------");
        for(var i=0; i<programmers.length; i ++) {
            programmers[i].print();
        }
    };  
};

addProgrammer();

