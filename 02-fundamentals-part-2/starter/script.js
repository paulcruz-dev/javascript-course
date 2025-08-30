// // console.log("Part 2: Functions ready!");
 
// // // // Functions - Declarations and Expressions
// // // function logger() {
// // //     console.log("My name is Paul");
// // // }
 
// // // logger();
// // // logger();
// // // logger();
 
// // // function fruitProcessor(apples, oranges) {
// // //   console.log(apples, oranges);
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }
 
// // // console.log(fruitProcessor(5, 3));
 
// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);
 
// // // // Function Expressions
// // // const calcAge = function(birthYear) {
// // //     return 2037 - birthYear;
// // // };
 
// // // const age1 = calcAge(1991);
// // // console.log(age1);
 
// // // console.log(calcAge(1991));
 
// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I am ${firstName} ${lastName} and I am ${age} years old.`;
// // //     return introduction;
// // // }
 
// // // console.log(introduce("Paul", "Cruz", 22));
// // // console.log(introduce("Sarah"));
 
// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;
 
// // //     if(retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years`;
// // //     } else {
// // //         return `${firstName} has already retired!`;
// // //     }
// // // }
 
// // // console.log(yearsUntilRetirement(1991, "Paul"));
 
// // // // Function Scope
// // // const globalVar = "I am global";
 
// // // function testScope() {
// // //     const localVar = "I am local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }
 
// // // testScope();
// // // console.log(globalVar);
// // // // console.log(localbar);
 
// // // // THE CHALLENGE
// // // function calcAverage(score1, score2, score3) {
// // //   return (score1 + score2 + score3) / 3;
// // // }
 
// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //     if (avgDolphins >= 2 * avgKoalas) {
// // //         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// // //     } else if (avgKoalas >= 2 * avgDolphins) {
// // //         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
// // //     } else {
// // //         console.log(`No team wins`);
// // //     }
// // // }
// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);
 
// const friends = ["John", "Paul", "Mark"];
// console.log(friends);
 
// const mixed = ["Jeyp", 24, false, friends];
// console.log(mixed);
 
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
 
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
 
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
 
// friends[0] = "Jay";
// console.log(friends);
 
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// };
 
// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);
 
// const newLength = friends.push("Tom");
// console.log(friends);
// console.log(newLength);
 
// friends.unshift("John");
// console.log(friends);
 
// // Removing Element
// // Last Item
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// // First Item
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
 
// console.log(friends.indexOf("Paul"));
// console.log(friends.indexOf("Mark"));
 
// console.log(friends.includes("Paul"));
// console.log(friends.includes("John"));
 
// // Array Iteration
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
 
// friends.forEach(
//     function(friends, index) {
//         console.log(`${index + 1}: ${friends}`);
//     }
// );
 
// friends.forEach(
//     (friend, index) => {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// )
 
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;
 
// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }
 
// const average1 = total / grades2.length;
// console.log(`Average grade: ${average1.toFixed(2)}`);
 
// let passedCount = 0;
// grades2.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed`);
 
// // Coding Challenge #2 - Student Grade Manager
 
// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i];
//     }
//     return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//             highest = grades[i];
//         }
//     }
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//     let lowest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] < lowest) {
//             lowest = grades[i];
//         }
//     }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//     let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= passingGrade) {
//             count++;
//         }
//     }
//     return count;
// }

// // Generate complete report
// const average = calculateAverage(grades3);
// const highest = findHighestGrade(grades3);
// const lowest = findLowestGrade(grades3);
// const passing = countPassing(grades3, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades3.length}`);

// Array Problem
console.log("=== ARRAY PROBLEM ===");
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]  
]

console.log(jonasArray[0]);
console.log(jonasArray[1]);
console.log(jonasArray[2]);
console.log(jonasArray[3]);

console.log("=== OBJECTS ===");


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonasArray[2]);

console.log(jonas.firstName);
console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas.job);
console.log(jonas.friends);

console.log(jonas["firstName"]);
console.log(jonas["lastName"]);
console.log(jonas["age"]);
console.log(jonas["job"]);
console.log(jonas["friends"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

jonas.job = "programmer";
jonas["age"] = 35;
console.log(jonas);

jonas.friends = ["Paul", "Tom", "Jeyp"];
console.log(jonas);

jonas.location = "Philippines";
jonas["instagram"] = "itsmejonas";
jonas.hasDriverLicense = true;
console.log(jonas);

console.log("=== EXERCISE 1 ===");
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  genres: ["Fiction", "Adventure", "Fantasy"],
  available: true
};

const playlist = {
    album: "Happy BurstDay",
    artist: "Seventeen",
    favorites: ["Thunder", "Damage", "Bad Influence"],
}

console.log(book.author);
console.log(playlist.artist);

// Add new properties
playlist.genre = "Kpop";
console.log(playlist);

// Modify existing properties
playlist.favorites = ["Thunder", "HBD", "Bad Influence"];
console.log(playlist);

const person = {
    name: "Paul",
    age: 22,
    occupation: "Student",
};

const phone = {
    brand: "Apple",
    model: "iPhone 13",
    year: 2021,
    color: "Black",
};

console.log(person);
console.log(phone);

const student = {
    name: "John",
    gwa: [3.5, 3.0, 4.0],
    specialization: "Mobile Applications",
    address: {
        street: "31 Victory Street",
        city: "Quezon City",
    },
};

console.log(student.gwa[1]);
console.log(student.address.city);

console.log("=== OBJECT METHODS ===");
const king = {
    firstName: "King",
    lastName: "Cruz",
    birthYear: 2022,
    job: "Cat",
    friends: ["Tom", "Paul", "John"],
    isACat: true,

    // Method using function declaration
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },
};
console.log(king.calcAge(2022));
console.log(king.calcAge(king.birthYear));

const kingImproved = {
    firstName: "King",
    lastName: "Cruz",
    birthYear: 2022,
    job: "Cat",
    friends: ["Tom", "Paul", "John"],
    isACat: true,

    // Method using function declaration
    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    },
};
console.log(kingImproved.calcAge());

const kingAdvanced = {
    firstName: "King",
    lastName: "Cruz",
    birthYear: 2022,
    job: "Cat",
    friends: ["Tom", "Paul", "John"],
    isACat: true,

    // Method using function declaration
    calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

    getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.isACat ? "a" : "no"} cat license.`;
  },
};

console.log(kingAdvanced.calcAge());
console.log(kingAdvanced.age);
console.log(kingAdvanced.getSummary());

console.log("=== EXERCISE 2 ===");

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",

  add: function () {
    this.result = this.num1 + this.num2;
  },
  subtract: function () {
    this.result = this.num1 - this.num2;
  },
  multiply: function () {
    this.result = this.num1 * this.num2;
  },
  divide: function () {
    this.result = this.num1 / this.num2;
  },

  calculate: function () {
    if (this.operator === "+") {
      this.add();
    } else if (this.operator === "-") {
      this.subtract();
    } else if (this.operator === "*") {
      this.multiply();
    } else if (this.operator === "/") {
      this.divide();
    }
    return this.result;
  },

  getResult: function () {
    return `${this.num1} ${this.operator} ${this.num2} = ${this.result}`;
  },
};

console.log(calculator.calculate());
console.log(calculator.getResult());

console.log("=== CHALLENGE ===");
const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    return `Name: ${this.firstName} ${this.lastName}
    Age: ${this.calcAge()}
    Location: ${this.location}
    Status: ${this.isActive ? "Active" : "Inactive"}
    Friends: ${this.getActiveFriends()} active, ${this.friends.length} total
    Interests: ${this.interests.join(", ")}`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());

