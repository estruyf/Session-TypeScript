var chalk = require('chalk'),
    log = console.log;

var test1 = 1;
test1 += 3;

log("Should output 4:", chalk.green(test1));
log("");

// test1 += "2";

// log('Lets add "2" to the number. 4 + 2 should output 6, but it is:', chalk.red(test1));
// log("Why? Because now I'm a string:", chalk.blue(typeof test1));

// if (test1 == "42") {
//     log("Yes, I'm string 42:", chalk.green(test1));
// }
// log("");

// log("What if we check the number 42?");
// if (test1 == 42) {
//     log("Yes, I'm number 42:", chalk.green(test1), "- and what is my type?", chalk.blue(typeof test1));
//     log("Can you still follow?");
// }
// log("");

// log('So "42" and 42 are the same?');
// if (test1 == 42 && test1 == "42") {
//     log(chalk.green("Yes"));
// }
// log("");

// log("Why?", chalk.blue("Because you didn't ask me to check the type."));
// log("");

// log("Ok, lets try it again. Are you really number 42?");
// if (test1 === 42) {
//     // Yese
// } else {
//     log(chalk.red("Nope"));
// }
// log("");


// log("Lets do something funny.");

// test1 = "2" + 40;
// log('"2" + 40 =', chalk.red(test1), "Type is:", chalk.blue(typeof (test1)));
// log("");

// test1 = "42" - 40;
// log('"42" - 40 =', chalk.green(test1), "Type is:", chalk.blue(typeof (test1)));
// log("");

// test1 = "2" + "40";
// log('"2" + "40" =', chalk.red(test1), "Type is:", chalk.blue(typeof (test1)));
// log("");

// test1 = "2" - "40";
// log('"2" - "40" =', chalk.green(test1), "Type is:", chalk.blue(typeof (test1)));
// log("");

// test1 = "42" - "something";
// log('"42" - "something"', "-> Should return NaN (not a number):", test1);
// log("Did you know that I'm still a number?:", chalk.green(typeof NaN));