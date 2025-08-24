// // // // // // // JavaScript Fundamentals - Part 1
// // // // // // // We'll write our code here!
// // // // // // let js = "amazing";
// // // // // // console.log(40 + 8 + 23 - 10);
// // // // // // console.log(js);
 
// // // // // // console.log("== VARIABLES ==");
 
// // // // // // let firstName = "Jonas";
// // // // // // console.log(firstName);
 
// // // // // // let age = 30;
// // // // // // console.log(age);
// // // // // // age = 50;
// // // // // // console.log(age);
 
// // // // // // const birthYear = 1991;
// // // // // // console.log(birthYear);
 
// // // // // // const PI = 3.1415;
// // // // // // console.log(PI);
 
// // // // // // var job = "programmer";
// // // // // // job = "student";
// // // // // // console.log(job);
 
// // // // // // const country = "Philippines";
// // // // // // const language = "Filipino";
 
// // // // // // age = 25;
// // // // // // age = 26;
 
// // // // // // console.log("=== DATA TYPES ===");
 
// // // // // // // number
// // // // // // let id = 12345;
// // // // // // console.log(id); 12345
// // // // // // console.log(typeof id); 'number'
 
// // // // // // // String
// // // // // // let lastName = "Doe";
// // // // // // console.log(lastName); 'Doe';
// // // // // // console.log(typeof lastName); 'string'
 
// // // // // // // boolean
// // // // // // let javaScriptIsFun = true;
// // // // // // console.log(javaScriptIsFun); true
// // // // // // console.log(typeof javaScriptIsFun); 'boolean';
 
// // // // // // //undefined
// // // // // // let year;
// // // // // // console.log(year);
// // // // // // console.log(typeof year); 'undefined';
 
// // // // // // let dynamicVariable = 40;
// // // // // // console.log(dynamicVariable, typeof dynamicVariable); [ 40, 'number' ];
 
// // // // // // //change to string
// // // // // // dynamicVariable = " I am now a String ";
// // // // // // console.log(dynamicVariable, typeof dynamicVariable); ['I am now a String', "string"];
 
// // // // // // dynamicVariable = true;
// // // // // // console.log(dynamicVariable, typeof dynamicVariable); [true, 'boolean'];

// // // // // // //------------------Basic Operators-----------------//
 
// // // // // console.log("=== MATH OPERATORS ===");
 
// // // // // const now = 2037;
// // // // // const ageJonas = now - 1991;
// // // // // const ageSarah = now - 2018;
// // // // // console.log(ageJonas, ageSarah);
 
// // // // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
// // // // // console.log("Math operations:");
// // // // // console.log("Addition:", 10 + 5);
// // // // // console.log("Subtraction:", 20 - 8);
// // // // // console.log("Multiplication:", 4 * 7);
// // // // // console.log("Division", 15 / 3);
// // // // // console.log("Exponentiation", 2 ** 3);
 
// // // // // //Math with Strings!
// // // // // const firstName = "Jonas";
// // // // // const lastName = "Doe";
// // // // // console.log(firstName + " " + lastName);
 
// // // // // console.log("Hello " + "World" + "!");
 
// // // // // console.log("=== ASSIGNMENT OPERATORS ===");
 
// // // // // let x = 10 + 5;
// // // // // console.log("x starts as:", x);
 
// // // // // x += 10;
// // // // // console.log("x starts as:", x);
 
// // // // // x /= 2;
// // // // // console.log("x starts as:", x);
 
// // // // // x++;
// // // // // console.log("x starts as:", x);
 
// // // // // x--;
// // // // // console.log("x starts as:", x);
 
// // // // // //comparison operators
// // // // // console.log("=== COMPARISON OPERATORS ===");
 
// // // // // console.log("Age comparison:");
// // // // // console.log(ageJonas > ageSarah);
// // // // // console.log(ageSarah >= 18);
// // // // // console.log(ageJonas < 30);
 
// // // // // console.log("Number comparisons:");
// // // // // console.log(25 > 20);
// // // // // console.log(15 < 10);
// // // // // console.log(18 >= 18);
// // // // // console.log(16 <= 15);
 
// // // // // const isFullAge = ageSarah >= 18;
// // // // // console.log("Sarah is adult:", isFullAge);
 
// // // // // const isJonasOlder = ageJonas > ageSarah;
// // // // // console.log("Jonas is older:", isJonasOlder);
 
// // // // // console.log("Complex comparison:");
// // // // // console.log(now - 1991 > now - 2018);
 
// // // // // let z, y;
// // // // // z = y = 25 - 10 - 5;
// // // // // console.log(z, y);
 
// // // // // const averageAge = (ageJonas + ageSarah) / 2;
// // // // // console.log(ageJonas, ageSarah, averageAge);
 
// // // // // const massMark = 78;
// // // // // const heightMark = 1.69;
// // // // // const massJohn = 92;
// // // // // const heightJohn = 1.95;
 
// // // // // //MARK BMI
// // // // // console.log("=== MARK BMI ===");
// // // // // console.log("Mark's Mass: ", massMark);
// // // // // console.log("Mark's Height: ", heightMark);
// // // // // const BMI = massMark / heightMark ** 2;
// // // // // console.log("Mark's BMI: ", BMI);
 
// // // // // //JOHN BMI
// // // // // console.log("=== JOHN BMI ===");
// // // // // console.log("John's Mass: ", massJohn);
// // // // // console.log("John's Height: ", heightJohn);
// // // // // const BMI2 = massJohn / (heightJohn * heightJohn);
// // // // // console.log("John's BMI: ", BMI2);
 
// // // // // //WHOSE BMI IS HIGHER
// // // // // console.log("=== IS MARK'S BMI HIGHER? ===");
// // // // // const isMarkHigher = BMI > BMI2;
// // // // // const BMIhigh = isMarkHigher;
// // // // // console.log(BMIhigh);

// // // // const firstName = "Jonas";
// // // // const job = "teacher";
// // // // const birthYear = 1991;
// // // // const year = 2037;
 
// // // // const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // // // console.log(jonas);
 
// // // // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // // // console.log(jonasNew);
 
// // // // console.log(`I'm ${2037 - 1991} years old`);
// // // // console.log(`Math works: ${2 + 3} equals five`);
// // // // console.log(`Comparisons too: ${5 > 3}`);
// // // // console.log(`Just a regular string...`);
 
 
// // // // const age = 16;
 
// // // // if(age >= 18){
// // // //     console.log("Sarah can start driving license 🚗");
// // // // }else{
// // // //     const yearsLeft = 18 - age;
// // // //     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // // // }
 
// // // // console.log(Boolean(0));
// // // // console.log(Boolean(undefined));
// // // // console.log(Boolean("Jonas"));
// // // // console.log(Boolean({}));
// // // // console.log(Boolean(""));
 
// // // // const massMark = 78;
// // // // const heightMark = 1.69;
// // // // const massJohn = 92;
// // // // const heightJohn = 1.95;
 
// // // // console.log("=== TRUTHY ===");
// // // // //MARK BMI
// // // // console.log("=== MARK BMI ===");
// // // // console.log("Mark's Mass: ", massMark);
// // // // console.log("Mark's Height: ", heightMark);
// // // // const BMIMark = massMark / heightMark ** 2;
// // // // console.log("Mark's BMI: ", BMIMark);
 
// // // // //JOHN BMI
// // // // console.log("=== JOHN BMI ===");
// // // // console.log("John's Mass: ", massJohn);
// // // // console.log("John's Height: ", heightJohn);
// // // // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // // // console.log("John's BMI: ", BMIJohn);
 
// // // // //WHOSE BMI IS HIGHER
// // // // console.log("=== IS MARK'S BMI HIGHER? ===");
// // // // const isMarkHigher = BMIMark > BMIJohn;
// // // // const BMIhigh = isMarkHigher;
// // // // if(isMarkHigher){
// // // //     const aveBMI = BMIMark - BMIJohn;
// // // //     console.log(`Mark's BMI ${BMIMark} is undeniably higher than John's BMI ${BMIJohn}! You are lacking ${aveBMI} average compared to Mark.`);
// // // // }else{
// // // //     console.log(`Mark's BMi is not higher than John. John Wins!`);
// // // // }

// // // // Type Conversion and Coercion

// // // // Manual
// // // const inputYear = "1991";
// // // console.log(Number(inputYear), inputYear);
// // // console.log(Number(inputYear) + 18);

// // // console.log(Number("Jonas"));
// // // console.log(typeof NaN);

// // // console.log(String(23), 23); 
// // // console.log(typeof String(23));

// // // // Automatic
// // // console.log("I am " + 23 + " years old");
// // // console.log("23" - "10" - 3);
// // // console.log("23" / "2"); 
// // // console.log("23" * "2");

// // // // Tricky Examples
// // // let n = "1" + 1;
// // // n = n - 1;
// // // console.log(n);

// // // console.log(2 + 3 + 4 + "5");
// // // console.log("10" - "4" - "3" - 2 + "5");

// // // // Exercise 1
// // // console.log("5" + 2);
// // // console.log("5" - 2);
// // // console.log("5" * 2); 
// // // console.log("5" / 2); 

// // // const userAge = "25";
// // // const userScore = 95;
// // // const ageNumber = Number(userAge);
// // // const scoreString = String(userScore);

// // // console.log(ageNumber);
// // // console.log(scoreString);

// // // // Exercise 2
// // // const num1 = prompt("First number:");
// // // const num2 = prompt("Second number:");
// // // const sum = num1 + num2; 
// // // console.log(`Sum: ${sum}`);

// // // // Fixed calculator
// // // const num1 = Number(prompt("First number:")); 
// // // const num2 = Number(prompt("Second number:")); 
// // // const sum = num1 + num2; 
// // // console.log(`Sum: ${sum}`);

// // // Equality Operators: == vs. ===

// // const age = "18";
// // if (age === 18) console.log("You just became an adult :D (strict)");
// // if (age == 18) console.log("You just became an adult :D (loose)");

// // console.log("18" === 18);
// // console.log("18" == 18);
// // console.log(18 === 18); 

// // console.log("0" == 0);
// // console.log(0 == false);
// // console.log("0" == false);
// // console.log(null == undefined);

// // // Weird Cases
// // console.log("" == 0); 
// // console.log("   " == 0); /

// // // Convert 
// // const favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   console.log("Cool! 23 is an amazing number!");
// // } else if (favourite === 7) {
// //   console.log("7 is also a cool number");
// // } else if (favourite === 9) {
// //   console.log("9 is also a cool number");
// // } else {
// //   console.log("Number is not 23 or 7 or 9");
// // }

// // if (favourite !== 23) console.log("Why not 23?");

// // // Exercise 1
// // console.log(5 === "5"); 
// // console.log(5 == "5");
// // console.log(true === 1);
// // console.log(true == 1);
// // console.log(false === 0);
// // console.log(false == 0);

// // Exercise 2
// // const username = prompt("Username:");
// // const password = prompt("Password:");

// // if (username === "admin" && password === "1234") {
// //   console.log("Welcome admin!");
// // } else {
// //   console.log("Access denied");
// // }

// // Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision); 
// console.log(!hasDriversLicense); 

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Create a club entry system with these rules:
// // Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 19;
// const hasID = true;
// const isVIP = false;

// if ((age >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day! Enjoy outside 🌞");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day, but not perfect 🙂");
} else {
  console.log("Stay inside ☔");
}

// The Conditional (Ternary) Operator

const age = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

// Perfect for template literals!
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

const status = score >= 60 ? "passed" : "failed";
const message = isLoggedIn ? "Welcome back!" : "Please log in";
const discount = isPremium ? 0.2 : 0.1;

if (score >= 90) {
  console.log("Excellent!");
  grade = "A";
  bonus = true;
} else if (score >= 80) {
  console.log("Good job!");
  grade = "B";
}

// Exercise 1
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }

// // Ternary Version
// const isLoggedIn = true;
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
// console.log(welcomeMessage);

// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8
// } else {
//   price = 100;
// }
// // Ternary Version
// const isPremium = false;
// let price = isPremium ? 100 * 0.8 : 100;

// Exercise 2
// const score = 85;
// const weather = "sunny";
// const battery = 15;

// const scoreMsg = `Your score: ${score} (${score >= 75 ? "Passed" : "Failed"})`;
// const weatherMsg = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// const batteryMsg = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

// console.log(scoreMsg);
// console.log(weatherMsg);
// console.log(batteryMsg);

// The Challenge 
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


